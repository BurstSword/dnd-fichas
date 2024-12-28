import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit, OnDestroy {
  characters: any[] = [];
  isAddCharacterMenuOpen = false; // Controla si el menú está abierto
  popoverEvent: any; // Evento para posicionar el popover
  isOptionsOpen = false; // Controla si el popover de opciones está abierto

  private charactersSubscription!: Subscription;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    // 🔄 Suscripción en tiempo real
    this.charactersSubscription = this.dataService
      .getCharacters()
      .subscribe((characters) => {
        this.characters = characters;
      });
  }

  ngOnDestroy() {
    // 🚫 Evita fugas de memoria
    if (this.charactersSubscription) {
      this.charactersSubscription.unsubscribe();
    }
  }

  openAddCharacterMenu(event: Event): void {
    this.popoverEvent = event;
    this.isAddCharacterMenuOpen = true;
  }

  editCharacter(index: number) {
    this.isAddCharacterMenuOpen = false;
    const character = this.characters[index];
    this.router.navigate(['/character-form', { id: character.id }]); // Navega al formulario con el ID
  }

  viewCharacter(index: number) {
    const character = this.characters[index];
    this.router.navigate(['/character-view', { id: character.id }]);
  }

  async deleteCharacter(index: number) {
    const character = this.characters[index];
    await this.dataService.deleteCharacterById(character.id);
  }

  async changePicture(index: number) {
    try {
      const image = await Camera.getPhoto({
        quality: 80,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos, // Abrir galería
      });

      if (image?.path || image?.webPath) {
        // Guardamos la imagen en el personaje
        this.characters[index].picture = image.webPath;

        // Actualizamos en el almacenamiento de Firebase
        await this.dataService.updateCharacterById(
          this.characters[index].id,
          this.characters[index]
        );
      }
    } catch (error) {
      console.error('Error al cambiar la imagen', error);
    }
  }

  importCharacter(): void {
    // Crear un input para seleccionar un archivo
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e: any) => {
          try {
            const importedCharacter = JSON.parse(e.target.result);
            if (this.validateCharacter(importedCharacter)) {
              importedCharacter.id = this.generateId(); // Generar un ID único
              await this.dataService.addCharacter(importedCharacter); // Añadir personaje al servicio
              alert('Personaje importado correctamente');
            } else {
              alert('El archivo JSON no es válido.');
            }
          } catch (error) {
            alert('Error al leer el archivo JSON.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click(); // Simular clic para abrir el selector de archivos
  }

  validateCharacter(character: any): boolean {
    // Validar que el archivo JSON tenga la estructura necesaria
    return character && character.name && character.class && character.level;
  }

  generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  openOptions(event: MouseEvent) {
    this.popoverEvent = event; // Guarda la posición del clic
    this.isOptionsOpen = true; // Abre el popover
  }

  goToCreator() {
    this.isOptionsOpen = false; // Cierra el popover
    setTimeout(() => {
      this.router.navigate(['/character-form']);
    }, 1);
  }

  goToDiceRollers() {
    this.isOptionsOpen = false; // Cierra el popover
    setTimeout(() => {
      this.router.navigate(['/dices']);
    }, 1);
  }

  goToCombat() {
    this.isOptionsOpen = false; // Cierra el popover
    setTimeout(() => {
      this.router.navigate(['/combat-manager']);
    }, 1);
  }
}
