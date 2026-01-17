import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription, shareReplay } from 'rxjs';
import { where } from '@angular/fire/firestore';
import { FirestoreService } from '../../../core/services/firestore.service';
import { CombatEntity } from '../../../shared/models/combat-entity.model';
import { Character } from '../../../shared/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CombatService implements OnDestroy {
  private readonly combatEntities$ = this.firestoreService
    .collectionDataWithId<CombatEntity>('combat')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  private readonly availableCharacters$ = this.firestoreService
    .collectionDataWithQuery<Character>('characters', [where('isInCombat', '==', false)])
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  private readonly syncSubscription: Subscription;

  constructor(private readonly firestoreService: FirestoreService) {
    this.syncSubscription = this.firestoreService
      .collectionDataWithId<Character>('characters')
      .subscribe((characters) => {
        characters.forEach(async (character) => {
          const combatDocs = await this.firestoreService.queryByField<CombatEntity>(
            'combat',
            'id',
            character.id
          );

          combatDocs.forEach(async (doc) => {
            if (!doc.id) {
              return;
            }
            await this.firestoreService.update<CombatEntity>('combat', doc.id, {
              name: character.name,
              maxHP: character.secondaryStats.maxHP,
              currentHP: character.secondaryStats.currentHP,
              initiative: character.initiative || 0,
              armorClass: character.secondaryStats.armorClass,
            });
          });
        });
      });
  }

  getCombatEntities(): Observable<CombatEntity[]> {
    return this.combatEntities$;
  }

  getAvailableCharacters(): Observable<Character[]> {
    return this.availableCharacters$;
  }

  async addCombatEntity(entity: CombatEntity): Promise<void> {
    await this.firestoreService.add('combat', entity);

    if (entity.type === 'character') {
      await this.firestoreService.update<Character>('characters', entity.id, { isInCombat: true });
    }
  }

  async updateCombatEntity(id: string, updates: Partial<CombatEntity>): Promise<void> {
    await this.firestoreService.update('combat', id, updates);
  }

  async deleteCombatEntity(entity: CombatEntity): Promise<void> {
    if (entity.type === 'character' && entity.characterId) {
      await this.firestoreService.update<Character>('characters', entity.characterId, {
        isInCombat: false,
      });
    }

    await this.firestoreService.remove('combat', entity.id);
  }

  ngOnDestroy(): void {
    this.syncSubscription?.unsubscribe();
  }
}
