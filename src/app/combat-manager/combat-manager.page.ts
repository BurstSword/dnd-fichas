import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Subscription, combineLatest } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Character } from 'src/interfaces/character';

interface CombatEntity {
  id: string;
  name: string;
  type: 'character' | 'monster';
  maxHP: number;
  currentHP: number;
  initiative: number;
  characterId?: string;
  armorClass?: number;
}

@Component({
  selector: 'app-combat-manager',
  templateUrl: './combat-manager.page.html',
  styleUrls: ['./combat-manager.page.scss'],
})
export class CombatManagerPage implements OnInit, OnDestroy {

  newMonster: Partial<CombatEntity & { quantity: number }> = {
    name: '',
    maxHP: 0,
    currentHP: 0,
    initiative: 0,
    armorClass: 0,
    quantity: 1,
  };


  combatEntities: CombatEntity[] = [];
  availableCharacters: any[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private dataService: DataService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.subscriptions.push(
      combineLatest([
        this.dataService.getCombatEntities(),
        this.dataService.getAvailableCharacters(),
      ]).subscribe(([combatEntities, availableCharacters]) => {
        this.combatEntities = combatEntities.sort((a, b) => b.initiative - a.initiative);
        this.availableCharacters = availableCharacters;
      })
    );
  }

  /**
 * Abre un Alert para añadir monstruos.
 */
  async openAddMonsterAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Añadir Monstruo',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del monstruo'
        },
        {
          name: 'maxHP',
          type: 'number',
          placeholder: 'HP Máximo'
        },
        {
          name: 'initiative',
          type: 'number',
          placeholder: 'Iniciativa'
        },
        {
          name: 'armorClass',
          type: 'number',
          placeholder: 'Clase de Armadura'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Cantidad (1 por defecto)',
          value: 1
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Añadir monstruo cancelado');
          }
        },
        {
          text: 'Añadir',
          handler: (data) => {
            this.addMonstersToCombat(data);
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Añade los monstruos al combate.
   */
  addMonstersToCombat(data: any) {
    const { name, maxHP, initiative, armorClass, quantity } = data;

    if (!name || !maxHP || !initiative) {
      alert('Por favor, rellena al menos el nombre, HP Máximo e Iniciativa.');
      return;
    }

    const numMonsters = Number(quantity) || 1;

    for (let i = 0; i < numMonsters; i++) {
      const monster: CombatEntity = {
        id: `monster-${Date.now()}-${i}`,
        name: numMonsters > 1 ? `${name} #${i + 1}` : name,
        type: 'monster',
        maxHP: Number(maxHP),
        currentHP: Number(maxHP),
        initiative: Number(initiative),
        armorClass: Number(armorClass) || 0,
      };

      this.dataService.addCombatEntity(monster)
        .then(() => console.log(`Monstruo añadido: ${monster.name}`))
        .catch(error => console.error('Error al añadir monstruo:', error));
    }
  }


  addCharacterToCombat(character: Character) {
    console.log('Añadiendo personaje al combate:', character);
    this.dataService.addCombatEntity({
      id: character.id,
      name: character.name,
      type: 'character',
      maxHP: character.secondaryStats.maxHP,
      currentHP: character.secondaryStats.currentHP,
      initiative: character.initiative || 0,
      characterId: character.id,
      armorClass: character.secondaryStats.armorClass,
    }).then(() => {
      console.log(`Personaje ${character.name} añadido al combate`);
    }).catch(error => {
      console.error('Error al añadir personaje al combate:', error);
    });
  }

  removeEntity(entity: CombatEntity) {
    this.dataService.deleteCombatEntity(entity).then(() => {
      console.log(`Entidad con ID ${entity.characterId} eliminada del combate`);
    }).catch(error => {
      console.error('Error al eliminar entidad del combate:', error);
    });
  }

  adjustHP(entity: CombatEntity, amount: number) {
    const newHP = entity.currentHP + amount;

    // Limitar el HP entre 0 y el máximo
    if (newHP >= 0 && newHP <= entity.maxHP) {
      this.dataService.updateCombatEntity(entity.id, { currentHP: newHP })
        .then(() => console.log(`HP de ${entity.name} actualizado a ${newHP}`))
        .catch(error => console.error('Error al actualizar HP:', error));
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

  /**
 * Actualizar propiedades específicas de una entidad (Monstruo).
 * @param entity Entidad a actualizar
 * @param updates Campos a actualizar
 */
  updateEntity(entity: CombatEntity, updates: Partial<CombatEntity>) {
    if (entity.type === 'monster') {
      this.dataService.updateCombatEntity(entity.id, updates)
        .then(() => console.log(`Entidad ${entity.name} actualizada:`, updates))
        .catch(error => console.error('Error al actualizar la entidad:', error));
    }
  }

  async confirmRemoveEntity(entity: CombatEntity) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Eliminación',
      message: `¿Estás seguro de que quieres eliminar a ${entity.name}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.removeEntity(entity);
          }
        }
      ]
    });
  
    await alert.present();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
