import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { FirestoreService } from '../../../core/services/firestore.service';
import { Character, Spell } from '../../../shared/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly characters$ = this.firestoreService
    .collectionDataWithId<Character>('characters')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  private readonly spells$ = this.firestoreService
    .collectionDataWithId<Spell>('spells')
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  constructor(private readonly firestoreService: FirestoreService) {}

  getCharacters(): Observable<Character[]> {
    return this.characters$;
  }

  getCharacterById(id: string): Observable<Character | undefined> {
    return this.firestoreService.docDataWithId<Character>('characters', id);
  }

  getSpells(): Observable<Spell[]> {
    return this.spells$;
  }

  async addCharacter(character: Character): Promise<void> {
    if (!this.isValidCharacter(character)) {
      throw new Error('Invalid character data');
    }
    await this.firestoreService.add('characters', character);
  }

  async updateCharacter(id: string, updates: Partial<Character>): Promise<void> {
    await this.firestoreService.update('characters', id, updates);
  }

  async deleteCharacter(id: string): Promise<void> {
    await this.firestoreService.remove('characters', id);
  }

  async addSpell(spell: Spell): Promise<void> {
    await this.firestoreService.add('spells', spell);
  }

  async updateSpell(id: string, updates: Partial<Spell>): Promise<void> {
    await this.firestoreService.update('spells', id, updates);
  }

  async deleteSpell(id: string): Promise<void> {
    await this.firestoreService.remove('spells', id);
  }

  private isValidCharacter(character: Character): boolean {
    return Boolean(character.name && character.level !== undefined && character.class !== undefined);
  }
}
