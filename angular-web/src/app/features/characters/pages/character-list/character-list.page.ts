import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, catchError, of } from 'rxjs';

import { CharactersService } from '../../services/characters.service';
import { Character } from '../../../../shared/models/character.model';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">Character Sheets</h1>
        <p class="text-secondary">Manage your party and jump into combat.</p>
      </div>
      <div class="actions">
        <button class="button" (click)="goToCreate()">New Character</button>
      </div>
    </div>

    <div class="grid two" *ngIf="characters$ | async as characters">
      <article class="card character-card" *ngFor="let character of characters; trackBy: trackById">
        <div class="card-body" (click)="viewCharacter(character)">
          <h2>{{ character.name }}</h2>
          <p class="muted">Class: {{ character.class || 'N/A' }}</p>
          <p class="muted">Level: {{ character.level || 1 }}</p>
          <div class="badge">Proficiency {{ character.proficiency || 0 }}</div>
        </div>
        <div class="card-actions">
          <button class="button secondary" (click)="editCharacter(character)">Edit</button>
          <button class="button secondary" (click)="deleteCharacter(character)">Delete</button>
        </div>
      </article>
    </div>

    <div class="empty-state" *ngIf="(characters$ | async)?.length === 0">
      <p>No characters yet. Create your first hero.</p>
    </div>
  `,
  styles: [
    `
      .text-secondary {
        color: var(--text-secondary);
        margin: 4px 0 0;
      }

      .character-card {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .card-body {
        cursor: pointer;
      }

      .card-body h2 {
        margin: 0 0 8px;
      }

      .muted {
        margin: 4px 0;
        color: var(--text-secondary);
      }

      .card-actions {
        display: flex;
        gap: 12px;
      }

      .empty-state {
        text-align: center;
        color: var(--text-secondary);
      }
    `,
  ],
})
export class CharacterListPage {
  private readonly destroyRef = inject(DestroyRef);

  readonly characters$ = this.charactersService.getCharacters().pipe(
    map((characters) => characters ?? []),
    catchError((error) => {
      this.toastService.show('Unable to load characters.', 'error');
      console.error(error);
      return of([] as Character[]);
    })
  );

  constructor(
    private readonly charactersService: CharactersService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {
    this.characters$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  goToCreate(): void {
    this.router.navigate(['/characters/new']);
  }

  viewCharacter(character: Character): void {
    this.router.navigate(['/characters', character.id]);
  }

  editCharacter(character: Character): void {
    this.router.navigate(['/characters', character.id, 'edit']);
  }

  async deleteCharacter(character: Character): Promise<void> {
    await this.charactersService.deleteCharacter(character.id);
    this.toastService.show('Character deleted.', 'success');
  }

  trackById(_: number, character: Character): string {
    return character.id;
  }
}
