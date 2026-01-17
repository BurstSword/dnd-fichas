import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, of, switchMap } from 'rxjs';

import { CharactersService } from '../../services/characters.service';
import { Character } from '../../../../shared/models/character.model';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

@Component({
  selector: 'app-character-view',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterLink],
  template: `
    <ng-container *ngIf="character$ | async as character">
      <div class="page-header">
        <div>
          <h1 class="page-title">{{ character.name }}</h1>
          <p class="text-secondary">
            {{ character.class }} • Level {{ character.level }}
          </p>
        </div>
        <div class="actions">
          <button class="button secondary" (click)="editCharacter(character)">Edit</button>
          <button class="button secondary" (click)="deleteCharacter(character)">Delete</button>
        </div>
      </div>

      <div class="grid two">
        <section class="card section">
          <h2>Stats</h2>
          <p>HP: {{ character.secondaryStats.currentHP }} / {{ character.secondaryStats.maxHP }}</p>
          <p>Armor Class: {{ character.secondaryStats.armorClass }}</p>
          <p>Initiative: {{ character.initiative }}</p>
          <p>Speed: {{ character.secondaryStats.speed }}</p>
        </section>

        <section class="card section">
          <h2>Notes</h2>
          <p>{{ character.notes || 'No notes yet.' }}</p>
        </section>
      </div>

      <section class="card section" *ngIf="character.spellcasting?.spellsKnown?.length">
        <h2>Known Spells</h2>
        <div class="grid two">
          <div class="spell" *ngFor="let spell of character.spellcasting.spellsKnown">
            <strong>{{ spell.name }}</strong>
            <span>{{ spell.school }}</span>
          </div>
        </div>
      </section>
    </ng-container>

    <div class="empty-state" *ngIf="(character$ | async) === null">
      <p>Character not found.</p>
      <a class="button" routerLink="/characters">Back to list</a>
    </div>
  `,
  styles: [
    `
      .text-secondary {
        color: var(--text-secondary);
        margin: 4px 0 0;
      }

      .spell {
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--border);
      }

      .spell span {
        display: block;
        color: var(--text-secondary);
      }

      .empty-state {
        text-align: center;
        color: var(--text-secondary);
      }
    `,
  ],
})
export class CharacterViewPage {
  private readonly destroyRef = inject(DestroyRef);

  readonly character$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) => (id ? this.charactersService.getCharacterById(id) : of(undefined)))
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly charactersService: CharactersService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {
    this.character$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  editCharacter(character: Character): void {
    this.router.navigate(['/characters', character.id, 'edit']);
  }

  async deleteCharacter(character: Character): Promise<void> {
    await this.charactersService.deleteCharacter(character.id);
    this.toastService.show('Character deleted.', 'success');
    this.router.navigate(['/characters']);
  }
}
