import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CharactersService } from '../../services/characters.service';
import { Character, Spell } from '../../../../shared/models/character.model';
import { spellsLibrary } from '../../../../shared/data/spells-library';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgFor, AsyncPipe],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ isEditMode ? 'Edit Character' : 'Create Character' }}</h1>
        <p class="text-secondary">Keep the hero details consistent across combat and spells.</p>
      </div>
      <button class="button secondary" (click)="goBack()">Back</button>
    </div>

    <form class="card form-card" [formGroup]="characterForm" (ngSubmit)="save()">
      <div class="grid two">
        <label class="form-row">
          Name
          <input class="input" formControlName="name" placeholder="Character name" />
        </label>
        <label class="form-row">
          Class
          <input class="input" formControlName="class" placeholder="Class" />
        </label>
        <label class="form-row">
          Level
          <input class="input" type="number" formControlName="level" />
        </label>
        <label class="form-row">
          Archetype
          <input class="input" formControlName="archetype" placeholder="Archetype" />
        </label>
        <label class="form-row">
          Proficiency
          <input class="input" type="number" formControlName="proficiency" />
        </label>
        <label class="form-row">
          Initiative
          <input class="input" type="number" formControlName="initiative" />
        </label>
      </div>

      <div class="grid two">
        <label class="form-row">
          Max HP
          <input class="input" type="number" formControlName="maxHP" />
        </label>
        <label class="form-row">
          Current HP
          <input class="input" type="number" formControlName="currentHP" />
        </label>
        <label class="form-row">
          Armor Class
          <input class="input" type="number" formControlName="armorClass" />
        </label>
        <label class="form-row">
          Speed
          <input class="input" type="number" formControlName="speed" />
        </label>
      </div>

      <label class="form-row">
        Notes
        <textarea class="textarea" rows="4" formControlName="notes"></textarea>
      </label>

      <section class="section" *ngIf="availableSpells.length">
        <div class="section-header">
          <h2>Spells</h2>
          <select
            class="select"
            [(ngModel)]="selectedSpellLevel"
            name="spellLevel"
            (change)="onSpellLevelChange()"
          >
            <option *ngFor="let level of spellLevels" [value]="level">
              Level {{ level }}
            </option>
          </select>
        </div>
        <div class="grid two">
          <button
            type="button"
            class="button secondary"
            *ngFor="let spell of availableSpells"
            (click)="addSpell(spell)"
          >
            {{ spell.name }}
          </button>
        </div>
      </section>

      <section class="section" *ngIf="selectedSpells.length">
        <h2>Known Spells</h2>
        <div class="grid two">
          <div class="card spell-card" *ngFor="let spell of selectedSpells">
            <strong>{{ spell.name }}</strong>
            <p>{{ spell.school }}</p>
            <button type="button" class="button secondary" (click)="removeSpell(spell)">Remove</button>
          </div>
        </div>
      </section>

      <div class="form-actions">
        <button class="button" type="submit" [disabled]="characterForm.invalid">
          Save Character
        </button>
      </div>
    </form>
  `,
  styles: [
    `
      .form-card {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .text-secondary {
        color: var(--text-secondary);
        margin: 4px 0 0;
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
      }

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
      }

      .spell-card {
        padding: 16px;
        display: grid;
        gap: 8px;
      }
    `,
  ],
})
export class CharacterFormPage {
  private readonly destroyRef = inject(DestroyRef);

  readonly spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  selectedSpellLevel = 0;
  availableSpells: Spell[] = [];
  selectedSpells: Spell[] = [];

  readonly characterForm = this.formBuilder.group({
    name: ['', Validators.required],
    class: ['', Validators.required],
    level: [1, Validators.required],
    archetype: [''],
    proficiency: [2, Validators.required],
    initiative: [0],
    maxHP: [10, Validators.required],
    currentHP: [10, Validators.required],
    armorClass: [10, Validators.required],
    speed: [30, Validators.required],
    notes: [''],
  });

  isEditMode = false;
  private currentCharacterId: string | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly charactersService: CharactersService,
    private readonly toastService: ToastService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const id = params.get('id');
        this.isEditMode = Boolean(id);
        this.currentCharacterId = id;

        if (id) {
          this.charactersService
            .getCharacterById(id)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((character) => {
              if (!character) {
                return;
              }
              this.selectedSpells = character.spellcasting?.spellsKnown ?? [];
              this.characterForm.patchValue({
                name: character.name,
                class: character.class,
                level: character.level,
                archetype: character.archetype,
                proficiency: character.proficiency,
                initiative: character.initiative,
                maxHP: character.secondaryStats.maxHP,
                currentHP: character.secondaryStats.currentHP,
                armorClass: character.secondaryStats.armorClass,
                speed: character.secondaryStats.speed,
                notes: character.notes,
              });
            });
        }
      });

    this.updateAvailableSpells();
  }

  get isFormValid(): boolean {
    return this.characterForm.valid;
  }

  save(): void {
    if (!this.characterForm.valid) {
      this.toastService.show('Please complete required fields.', 'error');
      return;
    }

    const formValue = this.characterForm.getRawValue();
    const character = this.buildCharacter(formValue, this.selectedSpells, this.currentCharacterId);

    const saveOperation = this.isEditMode && this.currentCharacterId
      ? this.charactersService.updateCharacter(this.currentCharacterId, character)
      : this.charactersService.addCharacter(character);

    saveOperation
      .then(() => {
        this.toastService.show('Character saved.', 'success');
        this.router.navigate(['/characters']);
      })
      .catch((error) => {
        console.error(error);
        this.toastService.show('Unable to save character.', 'error');
      });
  }

  goBack(): void {
    this.router.navigate(['/characters']);
  }

  addSpell(spell: Spell): void {
    if (this.selectedSpells.find((item) => item.name === spell.name)) {
      return;
    }
    this.selectedSpells = [...this.selectedSpells, spell];
  }

  removeSpell(spell: Spell): void {
    this.selectedSpells = this.selectedSpells.filter((item) => item.name !== spell.name);
  }

  onSpellLevelChange(): void {
    this.updateAvailableSpells();
  }

  private buildCharacter(
    formValue: Record<string, any>,
    spellsKnown: Spell[],
    id: string | null
  ): Character {
    return {
      id: id ?? `${Date.now()}`,
      name: formValue.name,
      level: Number(formValue.level),
      class: formValue.class,
      archetype: formValue.archetype ?? '',
      proficiency: Number(formValue.proficiency),
      initiative: Number(formValue.initiative ?? 0),
      isInCombat: false,
      attributes: {
        STR: 10,
        DEX: 10,
        CON: 10,
        INT: 10,
        WIS: 10,
        CHA: 10,
      },
      secondaryStats: {
        maxHP: Number(formValue.maxHP),
        currentHP: Number(formValue.currentHP),
        armorClass: Number(formValue.armorClass),
        initiative: Number(formValue.initiative ?? 0),
        speed: Number(formValue.speed),
      },
      savingThrows: {
        STR: false,
        DEX: false,
        CON: false,
        INT: false,
        WIS: false,
        CHA: false,
      },
      skills: {},
      equipment: {
        items: [],
      },
      customAbilities: [],
      spellcasting: {
        spellSlots: {
          1: { max: 0, remaining: 0 },
          2: { max: 0, remaining: 0 },
          3: { max: 0, remaining: 0 },
          4: { max: 0, remaining: 0 },
          5: { max: 0, remaining: 0 },
          6: { max: 0, remaining: 0 },
          7: { max: 0, remaining: 0 },
          8: { max: 0, remaining: 0 },
          9: { max: 0, remaining: 0 },
        },
        spellsKnown,
      },
      notes: formValue.notes ?? '',
      picture: '',
      deathSaves: 0,
      deathSaveFails: [false, false, false],
      deathSaveSuccesses: [false, false, false],
    };
  }

  private updateAvailableSpells(): void {
    this.availableSpells = spellsLibrary[this.selectedSpellLevel] ?? [];
  }
}
