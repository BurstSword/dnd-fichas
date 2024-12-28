import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Character, Spell } from 'src/interfaces/character';
import { CombatEntity } from 'src/interfaces/combat.entity';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnDestroy {
  private characterCollection: AngularFirestoreCollection<Character>;
  private combatCollection: AngularFirestoreCollection<CombatEntity>;
  private spellsCollection: AngularFirestoreCollection<Spell>;
  private characterSubscription!: Subscription;

  constructor(private firestore: AngularFirestore) {
    this.characterCollection = firestore.collection('characters');
    this.combatCollection = firestore.collection('combat');
    this.spellsCollection = this.firestore.collection<Spell>('spells');
    this.syncCharactersWithCombat();
  }

  // ------------------------------------------
  // 🧑‍🎤 PERSONAJES
  // ------------------------------------------

  getCharacters(): Observable<Character[]> {
    return this.characterCollection.valueChanges({ idField: 'id' }) as Observable<Character[]>;
  }

  getAvailableCharacters(): Observable<Character[]> {
    return this.firestore
      .collection<Character>('characters', ref => ref.where('isInCombat', '==', false))
      .valueChanges({ idField: 'id' });
  }

  getCharacterById(id: string): Observable<Character | undefined> {
    return this.characterCollection.doc(id).valueChanges({ idField: 'id' }) as Observable<
      Character | undefined
    >;
  }

  async addCharacter(character: Character): Promise<void> {
    if (!this.isValidCharacter(character)) {
      throw new Error('Invalid character data');
    }
    await this.characterCollection.add(JSON.parse(JSON.stringify(character)));
  }

  async updateCharacterById(id: string, updatedCharacter: Partial<Character>): Promise<void> {
    await this.characterCollection.doc(id).update(updatedCharacter);
  }

  async deleteCharacterById(id: string): Promise<void> {
    await this.characterCollection.doc(id).delete();
  }

  private isValidCharacter(character: Character): boolean {
    if (!character.name || character.level === undefined || character.class === undefined) return false;
    return true;
  }

  // ------------------------------------------
  // ⚔️ COMBATE
  // ------------------------------------------

  getCombatEntities(): Observable<CombatEntity[]> {
    return this.combatCollection.valueChanges({ idField: 'id' });
  }

  async addCombatEntity(entity: CombatEntity): Promise<void> {
    try {
      await this.combatCollection.add(entity);
  
      // Si es un personaje, actualizamos isInCombat a true
      if (entity.type === 'character') {
        await this.updateCharacterById(entity.id, { isInCombat: true });
      }
    } catch (error) {
      console.error('Error al añadir la entidad al combate:', error);
      throw error;
    }
  }
  

  async updateCombatEntity(id: string, updatedEntity: Partial<CombatEntity>): Promise<void> {
    await this.combatCollection.doc(id).update(updatedEntity);
  }

  async deleteCombatEntity(entity: CombatEntity): Promise<void> {
    console.log('Eliminando entidad del combate:', entity.id);
    try {
      const combatDoc = await this.combatCollection.doc(entity.id).get().toPromise();
      if (combatDoc?.exists) {
        const entity = combatDoc.data() as CombatEntity;
  
        if (entity.type === 'character') {
          await this.updateCharacterById(entity.characterId, { isInCombat: false });
        }
      }
  
      await this.combatCollection.doc(entity.id).delete();
    } catch (error) {
      console.error('Error al eliminar la entidad del combate:', error);
      throw error;
    }
  }
  

  // ------------------------------------------
  // 🔄 SINCRONIZACIÓN
  // ------------------------------------------

  private syncCharactersWithCombat(): void {
    this.characterSubscription = this.characterCollection.valueChanges({ idField: 'id' })
      .subscribe(characters => {
        characters.forEach(async (character) => {
          const combatDoc = await this.combatCollection.ref.where('id', '==', character.id).get();
          combatDoc.forEach(async (doc) => {
            await this.combatCollection.doc(doc.id).update({
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

  ngOnDestroy(): void {
    if (this.characterSubscription) {
      this.characterSubscription.unsubscribe();
    }
  }

  /**
   * Obtener todos los hechizos.
   */
  getSpells(): Observable<Spell[]> {
    return this.spellsCollection.valueChanges({ idField: 'id' });
  }

  /**
   * Añadir un nuevo hechizo.
   */
  async addSpell(spell: Spell): Promise<void> {
    console.log(spell);
    await this.spellsCollection.add(spell);
  }

  async addSpells(spells: Spell[]): Promise<void> {
    const batch = this.firestore.firestore.batch();
    spells.forEach(spell => {
      const newSpellRef = this.spellsCollection.ref.doc();
      batch.set(newSpellRef, spell);
    });
    await batch.commit();
  }

  /**
   * Actualizar un hechizo.
   */
  async updateSpell(id: string, updatedSpell: Partial<Spell>): Promise<void> {
    await this.spellsCollection.doc(id).update(updatedSpell);
  }

  /**
   * Eliminar un hechizo.
   */
  async deleteSpell(id: string): Promise<void> {
    await this.spellsCollection.doc(id).delete();
  }
}
