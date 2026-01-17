export interface CombatEntity {
  id: string;
  name: string;
  type: 'character' | 'monster';
  maxHP: number;
  currentHP: number;
  initiative: number;
  characterId?: string;
  armorClass?: number;
}