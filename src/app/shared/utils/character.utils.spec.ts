import { Character } from '../models/character.model';
import { ensureSpellSlots } from './character.utils';

describe('ensureSpellSlots', () => {
  it('adds missing spell slot entries without mutating the original', () => {
    const character: Character = {
      id: '1',
      name: 'Test',
      level: 1,
      class: 'Wizard',
      proficiency: 2,
      initiative: 0,
      isInCombat: false,
      attributes: { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
      secondaryStats: {
        maxHP: 10,
        currentHP: 10,
        armorClass: 10,
        initiative: 0,
        speed: 30,
      },
      savingThrows: { STR: false, DEX: false, CON: false, INT: false, WIS: false, CHA: false },
      skills: {},
      equipment: { items: [] },
      customAbilities: [],
      spellcasting: {
        spellSlots: {
          1: { max: 1, remaining: 1 },
        },
        spellsKnown: [],
      },
      notes: '',
      picture: '',
      deathSaves: 0,
      deathSaveFails: [false, false, false],
      deathSaveSuccesses: [false, false, false],
    };

    const result = ensureSpellSlots(character, [1, 2]);

    expect(result.spellcasting.spellSlots[1]).toEqual({ max: 1, remaining: 1 });
    expect(result.spellcasting.spellSlots[2]).toEqual({ max: 0, remaining: 0 });
    expect(result).not.toBe(character);
  });

  it('returns the same reference when spellcasting is missing', () => {
    const character = { spellcasting: undefined } as Character;

    const result = ensureSpellSlots(character, [1]);

    expect(result).toBe(character);
  });
});
