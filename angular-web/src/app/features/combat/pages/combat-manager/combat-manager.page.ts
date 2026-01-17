import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { CombatService } from '../../services/combat.service';
import { CombatEntity } from '../../../../shared/models/combat-entity.model';
import { Character } from '../../../../shared/models/character.model';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

@Component({
  selector: 'app-combat-manager',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">Combat Manager</h1>
        <p class="text-secondary">Track initiative and HP during encounters.</p>
      </div>
      <button class="button" (click)="addMonster()">Add Monster</button>
    </div>

    <section class="card section" *ngIf="availableCharacters$ | async as availableCharacters">
      <h2>Available Characters</h2>
      <div class="grid two">
        <div class="card character-card" *ngFor="let character of availableCharacters; trackBy: trackById">
          <strong>{{ character.name }}</strong>
          <p>HP: {{ character.secondaryStats.currentHP }} / {{ character.secondaryStats.maxHP }}</p>
          <button class="button secondary" (click)="addCharacter(character)">Add to combat</button>
        </div>
      </div>
    </section>

    <section class="card section" *ngIf="combatEntities$ | async as combatEntities">
      <h2>Initiative Order</h2>
      <div class="grid">
        <div class="card combat-card" *ngFor="let entity of combatEntities; trackBy: trackById">
          <div class="combat-header">
            <strong>{{ entity.name }}</strong>
            <button class="button secondary" (click)="removeEntity(entity)">Remove</button>
          </div>
          <p>Initiative: {{ entity.initiative }}</p>
          <p>Armor Class: {{ entity.armorClass || 0 }}</p>
          <div class="combat-hp">
            <span>HP: {{ entity.currentHP }} / {{ entity.maxHP }}</span>
            <div class="hp-controls">
              <button class="button secondary" (click)="adjustHP(entity, -1)">-</button>
              <button class="button secondary" (click)="adjustHP(entity, 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .text-secondary {
        color: var(--text-secondary);
        margin: 4px 0 0;
      }

      .character-card,
      .combat-card {
        padding: 16px;
        display: grid;
        gap: 10px;
      }

      .combat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .combat-hp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }

      .hp-controls {
        display: flex;
        gap: 8px;
      }
    `,
  ],
})
export class CombatManagerPage {
  readonly combatEntities$ = this.combatService.getCombatEntities().pipe(
    map((entities) => [...entities].sort((a, b) => b.initiative - a.initiative))
  );
  readonly availableCharacters$ = this.combatService.getAvailableCharacters();

  constructor(
    private readonly combatService: CombatService,
    private readonly toastService: ToastService
  ) {}

  async addMonster(): Promise<void> {
    const name = window.prompt('Monster name');
    const maxHP = Number(window.prompt('Max HP') ?? 0);
    const initiative = Number(window.prompt('Initiative') ?? 0);
    const armorClass = Number(window.prompt('Armor Class') ?? 0);

    if (!name || !maxHP || !initiative) {
      this.toastService.show('Please provide name, HP and initiative.', 'error');
      return;
    }

    const monster: CombatEntity = {
      id: `monster-${Date.now()}`,
      name,
      type: 'monster',
      maxHP,
      currentHP: maxHP,
      initiative,
      armorClass,
    };

    await this.combatService.addCombatEntity(monster);
    this.toastService.show('Monster added to combat.', 'success');
  }

  async addCharacter(character: Character): Promise<void> {
    await this.combatService.addCombatEntity({
      id: character.id,
      name: character.name,
      type: 'character',
      maxHP: character.secondaryStats.maxHP,
      currentHP: character.secondaryStats.currentHP,
      initiative: character.initiative || 0,
      characterId: character.id,
      armorClass: character.secondaryStats.armorClass,
    });
    this.toastService.show('Character added to combat.', 'success');
  }

  async removeEntity(entity: CombatEntity): Promise<void> {
    await this.combatService.deleteCombatEntity(entity);
    this.toastService.show('Entity removed from combat.', 'success');
  }

  async adjustHP(entity: CombatEntity, amount: number): Promise<void> {
    const newHP = entity.currentHP + amount;
    if (newHP < 0 || newHP > entity.maxHP) {
      return;
    }
    await this.combatService.updateCombatEntity(entity.id, { currentHP: newHP });
  }

  trackById(_: number, entity: CombatEntity | Character): string {
    return entity.id;
  }
}
