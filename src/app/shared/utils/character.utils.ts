import { Character } from '../models/character.model';

export const ensureSpellSlots = (
  character: Character,
  spellLevels: number[]
): Character => {
  if (!character.spellcasting?.spellSlots) {
    return character;
  }

  const updatedCharacter: Character = {
    ...character,
    spellcasting: {
      ...character.spellcasting,
      spellSlots: { ...character.spellcasting.spellSlots },
    },
  };

  spellLevels.forEach((level) => {
    if (!updatedCharacter.spellcasting?.spellSlots[level]) {
      updatedCharacter.spellcasting!.spellSlots[level] = { max: 0, remaining: 0 };
    }
  });

  return updatedCharacter;
};
