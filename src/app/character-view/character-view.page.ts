import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Character, Spell } from 'src/interfaces/character';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.page.html',
  styleUrls: ['./character-view.page.scss'],
})
export class CharacterViewPage implements OnInit {
  character: Character | null = null; // Inicializar como null
  selectedSpellLevel: number | '' = ''; // Nivel seleccionado para el filtro
  allSpells: Spell[] = []; // Lista completa de hechizos
  filteredSpells: Spell[] = []; // Lista filtrada de hechizos
  isOptionsOpen: boolean = false; // Estado del menú de opciones
  popoverEvent: MouseEvent | null = null; // Guarda el evento para posicionar el popover
  attributes: Array<{ key: keyof Character['attributes']; label: string }> = [
    { key: 'STR', label: 'Fuerza' },
    { key: 'DEX', label: 'Destreza' },
    { key: 'CON', label: 'Constitución' },
    { key: 'INT', label: 'Inteligencia' },
    { key: 'WIS', label: 'Sabiduría' },
    { key: 'CHA', label: 'Carisma' },
  ];

  deathSaves: number = 0;

  skills = [
    { key: 'athletics', name: 'Atletismo', attribute: 'STR' },
    { key: 'acrobatics', name: 'Acrobacias', attribute: 'DEX' },
    { key: 'sleightOfHand', name: 'Juego de Manos', attribute: 'DEX' },
    { key: 'stealth', name: 'Sigilo', attribute: 'DEX' },
    { key: 'arcana', name: 'Arcano', attribute: 'INT' },
    { key: 'history', name: 'Historia', attribute: 'INT' },
    { key: 'investigation', name: 'Invest.', attribute: 'INT' },
    { key: 'nature', name: 'Naturaleza', attribute: 'INT' },
    { key: 'religion', name: 'Religión', attribute: 'INT' },
    { key: 'animalHandling', name: 'Trato con Animales', attribute: 'WIS' },
    { key: 'insight', name: 'Perspicacia', attribute: 'WIS' },
    { key: 'medicine', name: 'Medicina', attribute: 'WIS' },
    { key: 'perception', name: 'Percepción', attribute: 'WIS' },
    { key: 'survival', name: 'Superv.', attribute: 'WIS' },
    { key: 'deception', name: 'Engaño', attribute: 'CHA' },
    { key: 'intimidation', name: 'Intimidación', attribute: 'CHA' },
    { key: 'performance', name: 'Interpretación', attribute: 'CHA' },
    { key: 'persuasion', name: 'Persuasión', attribute: 'CHA' },
  ];

  modifiers: Record<'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA', number> = {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  };

  spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Niveles de hechizo disponibles
  spellSlotsExpanded = false; // Controla si la sección está expandida
  skillsExpanded = false; // Controla si la sección de habilidades está expandida
  spellsExpanded = false; // Controla si la sección de hechizos está expandida
  notesExpanded = false; // Controla si la sección de notas está expandida
  savingThrowsExpanded = false; // Controla si la sección de tiradas de salvación está expandida
  deathSavesExpanded = false; // Controla si la sección de tiradas de salvación está expandida
  equipmentExpanded = false; // Controla si la sección de equipo está expandida
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.dataService.getCharacterById(characterId).subscribe((character) => {
        if (character) {
          this.character = { ...character };

          // Inicializa los spell slots
          if (this.character.spellcasting?.spellSlots) {
            this.spellLevels.forEach((level) => {
              if (!this.character?.spellcasting.spellSlots[level]) {
                this.character!.spellcasting!.spellSlots[level] = { max: 0, remaining: 0 };
              }
            });
          }

          if (this.character?.spellcasting?.spellsKnown) {
            this.allSpells = this.character.spellcasting.spellsKnown;
            this.filteredSpells = [...this.allSpells];
          }

          if (this.character.deathSaves) {
            this.deathSaves = this.character.deathSaves;
          }
        }
      });

    }
  }

  openOptions(event: MouseEvent) {
    this.popoverEvent = event; // Guarda la posición del clic
    this.isOptionsOpen = true; // Abre el popover
  }

  // Navegar al formulario de edición
  editCharacter() {
    this.isOptionsOpen = false;
    setTimeout(() => {
      this.router.navigate(['/character-form', { id: this.character?.id }]);
    }, 1);
  }

  updateDeathSaves() {
    const fails = this.character.deathSaveFails.filter(fail => fail).length;
    const successes = this.character.deathSaveSuccesses.filter(success => success).length;

    if (fails >= 3) {
      alert('💀 ¡El personaje ha muerto!');
    } else if (successes >= 3) {
      alert('❤️ ¡El personaje se ha estabilizado!');
    }

    // Guardar cambios en el servicio
    this.dataService.updateCharacterById(this.character.id, {
      deathSaveFails: this.character.deathSaveFails,
      deathSaveSuccesses: this.character.deathSaveSuccesses,
    });
  }

  calculateSavingThrow(attributeValue: number, attributeKey: keyof Character['attributes']): number {
    const baseModifier = this.calculateModifier(attributeValue);
    const proficiencyBonus = this.character?.savingThrows[attributeKey]
      ? this.character?.proficiency || 0
      : 0;
    return baseModifier + proficiencyBonus;
  }


  async confirmDeleteCharacter() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Estás seguro de que quieres eliminar a ${this.character?.name}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteCharacter();
            this.isOptionsOpen = false;
          },
        },
      ],
    });
    await alert.present();

  }

  // Eliminar el personaje
  deleteCharacter() {
    if (this.character) {
      this.dataService.deleteCharacterById(this.character.id); // Usamos un método del servicio
      this.router.navigate(['/']); // Navegamos de vuelta a la lista
    }
  }


  isEquipmentModalOpen: boolean = false; // Controla el estado del modal
  newEquipment: { name: string; description: string; type: string; damage?: string } = {
    name: '',
    description: '',
    type: '',
  };

  openEquipmentModal(): void {
    this.isEquipmentModalOpen = true;
  }

  closeEquipmentModal(): void {
    this.isEquipmentModalOpen = false;
    this.resetNewEquipment();
  }

  addEquipment(): void {
    if (!this.newEquipment.name || !this.newEquipment.type) {
      alert('Por favor, rellena todos los campos obligatorios.');
      return;
    }

    if (this.character && this.character.equipment) {

      // Añadir como objeto general
      this.character.equipment.items.push({
        name: this.newEquipment.name,
        description: this.newEquipment.description || '',
        type: 'item',
        damage: this.newEquipment.damage || '',
        attribute: 'STR',
      });
    }


    // Guardar cambios
    if (this.character) {
      const characterId = Number(this.character.id);

      this.dataService.updateCharacterById(characterId.toString(), this.character);
    }

    // Cerrar el modal y reiniciar el formulario
    this.closeEquipmentModal();
  }

  removeItem(index: number) {
    if (this.character && this.character.equipment) {
      this.character.equipment.items.splice(index, 1);
    }

    // Guardar cambios en el almacenamiento
    if (this.character) {
      const characterId = Number(this.character.id);
      this.dataService.updateCharacterById(characterId.toString(), this.character);
    }
  }

  removeWeapon(index: number) {
    if (this.character && this.character.equipment) {
      this.character.equipment.items.splice(index, 1);
    }

    // Guardar cambios en el almacenamiento
    if (this.character) {
      const characterId = Number(this.character.id);
      this.dataService.updateCharacterById(characterId.toString(), this.character);
    }
  }

  resetNewEquipment(): void {
    this.newEquipment = { name: '', description: '', type: '' };
  }



  /**
   * Actualiza los huecos restantes de un nivel específico de hechizo.
   * @param level Nivel del hechizo (1-9).
   * @param slot Número de huecos seleccionados.
   */
  updateSpellSlots(level: number, remaining: number) {
    this.character.spellcasting.spellSlots[level].remaining = remaining;

    this.dataService.updateCharacterById(this.character.id, {
      spellcasting: this.character.spellcasting,
    });
  }

  /**
   * Reinicia los huecos restantes al máximo disponible para todos los niveles.
   */
  resetSpellSlots(): void {
    if (this.character && this.character.spellcasting) {
      for (const level of this.spellLevels) {
        if (this.character.spellcasting.spellSlots[level]) {
          this.character.spellcasting.spellSlots[level].remaining =
            this.character.spellcasting.spellSlots[level].max;
        }
      }
    }
  }

  saveMaxHP(): void {
    if (this.character) {
      if (this.character.secondaryStats.currentHP > this.character.secondaryStats.maxHP) {
        // Ajusta el HP actual si excede el máximo
        this.character.secondaryStats.currentHP = this.character.secondaryStats.maxHP;
      }
      this.dataService.updateCharacterById(this.character.id, this.character); // Guarda el personaje
    }
  }

  saveCurrentHP(): void {
    if (this.character) {
      // Asegúrate de que el HP actual no exceda el rango permitido
      if (this.character.secondaryStats.currentHP < 0) {
        this.character.secondaryStats.currentHP = 0;
      } else if (this.character.secondaryStats.currentHP > this.character.secondaryStats.maxHP) {
        this.character.secondaryStats.currentHP = this.character.secondaryStats.maxHP;
      }
      this.dataService.updateCharacterById(this.character.id, this.character); // Guarda el personaje
    }
  }

  adjustHP(entity: Character, amount: number) {
    const newHP = entity.secondaryStats.currentHP + amount;

    // Limitar el HP entre 0 y el máximo
    if (newHP >= 0 && newHP <= entity.secondaryStats.maxHP) {
      entity.secondaryStats.currentHP = newHP;
      this.dataService.updateCharacterById(entity.id, entity);
    }
  }


  getHPBarColor(currentHP: number, maxHP: number): string {
    const percentage = (currentHP / maxHP) * 100;

    if (percentage > 50) {
      return 'success'; // Verde
    } else if (percentage > 20) {
      return 'warning'; // Amarillo
    } else {
      return 'danger'; // Rojo
    }
  }

  calculateModifier(attributeValue: number): number {
    if (!attributeValue || attributeValue <= 0) return 5; // Valor mínimo
    return Math.floor((attributeValue - 10) / 2); // Fórmula estándar para modificadores
  }

  updateModifiers(): void {
    // Aquí podrías actualizar otros elementos que dependan de los modificadores
  }

  /**
   * Alterna la visibilidad de la sección de huecos de hechizo.
   */
  toggleSpellSlots(): void {
    this.spellSlotsExpanded = !this.spellSlotsExpanded;
  }

  /**
   * Alterna la visibilidad de la sección de hechizos.
   */
  toggleSpells(): void {
    this.spellsExpanded = !this.spellsExpanded;
  }

  /**
   * Alterna la visibilidad de la sección de habilidades.
   */
  toggleSkills(): void {
    this.skillsExpanded = !this.skillsExpanded;
  }

  /**
   * Alterna la visibilidad de la sección de notas.
   */
  toggleNotes(): void {
    this.notesExpanded = !this.notesExpanded;
  }

  /**
   * Alterna la visibilidad de la sección de tiradas de salvación.
   */
  toggleSavingThrows(): void {
    this.savingThrowsExpanded = !this.savingThrowsExpanded;
  }

  /**
   * Alterna la visibilidad de la sección de tiradas de muerte.
   */
  toggleDeathSaves(): void {
    this.deathSavesExpanded = !this.deathSavesExpanded;
  }

  /**
   * Alterna la visibilidad de la sección de equipo.
   */
  toggleEquipment(): void {
    this.equipmentExpanded = !this.equipmentExpanded;
  }

  // Método para obtener las habilidades relacionadas con un atributo
  getSkillsByAttribute(attributeKey: keyof Character['attributes']) {
    return this.skills.filter((skill) => skill.attribute === attributeKey);
  }

  // Método para calcular el modificador de una habilidad
  // Método para calcular el modificador de una habilidad
  calculateSkillModifier(skillKey: string): number {
    const skill = this.skills.find((s) => s.key === skillKey);
    if (!skill || !this.character) return 0;

    const baseModifier = this.calculateModifier(this.character.attributes[skill.attribute as keyof Character['attributes']]);
    const proficiencyBonus = this.character.skills[skillKey] ? this.character.proficiency : 0;

    return baseModifier + proficiencyBonus;
  }

  saveNotes(): void {
    if (this.character) {
      this.character.notes = this.character.notes || '';
      this.dataService.updateCharacterById(this.character.id, this.character);
    }
  }

  filterSpellsByLevel(): void {
    if (this.selectedSpellLevel === '') {
      this.filteredSpells = [...this.allSpells]; // Si no hay filtro, muestra todos
    } else {
      this.filteredSpells = this.allSpells.filter(
        (spell) => spell.level === this.selectedSpellLevel
      );
    }
  }

  exportCharacter(): void {
    if (this.character) {
      const characterJSON = JSON.stringify(this.character, null, 2);
      const blob = new Blob([characterJSON], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      // Crear un enlace para descargar el archivo
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.character.name || 'character'}.json`;
      a.click();

      // Limpiar el URL del objeto
      URL.revokeObjectURL(url);
    } else {
      console.error('No character data available to export.');
    }
  }

  saveInitiative(): void {
    if (this.character) {
      this.dataService.updateCharacterById(this.character.id, this.character);
    }
  }

  /**
 * Alterna los puntos de hechizo basados en el slot seleccionado.
 * Si seleccionas un slot, se rellenan todos los anteriores.
 * Si desmarcas un slot, se desmarcan ese y los posteriores.
 */
toggleSpellSlot(level: number, selectedSlot: number): void {
  const spellSlots = this.character.spellcasting.spellSlots[level];

  if (!spellSlots) return;

  if (spellSlots.remaining >= selectedSlot) {
    // Desmarcar: Eliminar los puntos desde el seleccionado hacia adelante
    spellSlots.remaining = selectedSlot - 1;
  } else {
    // Marcar: Rellenar hasta el slot seleccionado
    spellSlots.remaining = selectedSlot;
  }

  // Guardar cambios en la base de datos
  this.dataService.updateCharacterById(this.character.id, {
    spellcasting: this.character.spellcasting,
  });
}

/**
 * Devuelve un array de números del 1 al máximo de slots disponibles.
 */
getMaxSlots(level: number): number[] {
  const max = this.character.spellcasting.spellSlots[level]?.max || 0;
  return Array.from({ length: max }, (_, i) => i + 1);
}


}