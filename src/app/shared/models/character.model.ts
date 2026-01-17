export interface Character {
  id: string; // Identificador único
  name: string; // Nombre del personaje
  level: number; // Nivel del personaje
  class: string; // Clase del personaje
  archetype?: string; // Subclase o arquetipo (opcional)
  proficiency: number;
  initiative: number; // Iniciativa
  isInCombat?: boolean; // Indica si el personaje ya está en combate

  // Estadísticas base (primarias)
  attributes: Record<'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA', number>;

  // Estadísticas calculadas (secundarias)
  secondaryStats: {
    maxHP: number; // Vida máxima
    currentHP: number; // Vida actual
    armorClass: number; // Clase de armadura
    initiative: number; // Iniciativa
    speed: number; // Velocidad
  };

  // Salvaciones (saving throws)
  savingThrows: {
    STR: boolean; // Proficiencia en Fuerza
    DEX: boolean; // Proficiencia en Destreza
    CON: boolean; // Proficiencia en Constitución
    INT: boolean; // Proficiencia en Inteligencia
    WIS: boolean; // Proficiencia en Sabiduría
    CHA: boolean; // Proficiencia en Carisma
  };

  // Habilidades
  skills: {
    [key: string]: boolean; // Ejemplo: { athletics: true, acrobatics: false }
  };

  // Equipo
  equipment: {
    items: {
      name: string;
      description: string;
      type: string;
      damage: string; // Daño en dados, si aplica
      attribute: keyof Character['attributes']; // Característica usada para el bonificador
    }[];
  };


  // Habilidades personalizadas
  customAbilities: Ability[]; // Lista de habilidades personalizadas

  // Lanzamiento de hechizos (opcional)
  spellcasting: Spellcasting; // Para personajes con habilidades mágicas

  notes: string; // Notas adicionales
  picture: string; // URL de la imagen del personaje
  deathSaves: number; // Número de éxitos/fallos en tiradas de salvación de muerte
  deathSaveFails?: boolean[];  // [false, false, false]
  deathSaveSuccesses?: boolean[];  // [false, false, false]
}

// Interfaz para armas
export interface Weapon {
  name: string; // Nombre del arma
  damage: string; // Expresión del daño (ej. "1d8 + 2d6 + 5")
  type: string; // Tipo de daño (ej. "psíquico", "cortante")
  attribute: keyof Character['attributes']; // Característica usada para el bonificador
}


// Interfaz para habilidades personalizadas
export interface Ability {
  name: string; // Nombre de la habilidad
  description: string; // Descripción
  uses: string; // Usos disponibles (ej. "INT mod por descanso largo")
}

// Interfaz para lanzamiento de hechizos
interface Spellcasting {
  spellSlots: {
    [level: number]: {
      max: number; // Máximos huecos de hechizo por nivel
      remaining: number; // Huecos restantes
    };
  };
  spellsKnown: Spell[]; // Hechizos conocidos
}


// Interfaz para hechizos
export interface Spell {
  name: string;
  level: number;
  school: string;
  classes: string[]; // Clases que pueden usar el hechizo
  components: string[];
  castingTime: string;
  range: string;
  duration: string;
  description: string;
  damage?: string; // Daño en dados, si aplica
}

