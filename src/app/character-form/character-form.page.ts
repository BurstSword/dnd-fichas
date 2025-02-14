import { Component, OnInit } from '@angular/core';
import { Character, Spell, Weapon } from 'src/interfaces/character';
import { spellsLibrary } from 'src/interfaces/spells-list';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.page.html',
  styleUrls: ['./character-form.page.scss'],
})
export class CharacterFormPage implements OnInit {
  private spellsSubscription!: Subscription;
  spells: Spell[] = [];
  // Inicializamos un personaje usando la interfaz Character
  character: Character = {
    id: 'new', // ID por defecto
    name: '', // Nombre inicial vacío
    level: 1, // Nivel inicial
    class: '', // Clase inicial
    archetype: '', // Subclase opcional inicial
    proficiency: 2, // Bonificador de competencia inicial
    initiative: 0, // Iniciativa actual
    isInCombat: false, // No está en combate al inicio
    // Atributos principales
    attributes: {
      STR: 19,
      DEX: 18,
      CON: 12,
      INT: 13,
      WIS: 15,
      CHA: 11,
    },

    // Estadísticas secundarias
    secondaryStats: {
      maxHP: 10,
      currentHP: 10,
      armorClass: 10,
      initiative: 0, // Calculado dinámicamente
      speed: 30, // Velocidad inicial estándar
    },

    // Salvaciones
    savingThrows: {
      STR: false,
      DEX: false,
      CON: false,
      INT: false,
      WIS: false,
      CHA: false,
    },

    // Habilidades iniciales
    skills: {},

    // Equipo inicial vacío
    equipment: {
      items: [],
    },

    // Sin habilidades personalizadas al inicio
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
      spellsKnown: [] = [],
    },
    notes: '', // Notas iniciales vacías
    picture: '', // URL de la imagen inicial
    deathSaves: 0, // Inicialmente sin éxitos ni fallos
    deathSaveFails: [false, false, false], // Inicialmente sin fallos
    deathSaveSuccesses: [false, false, false], // Inicialmente sin éxitos
  };

  newItem: any = {
    type: '',
    name: '',
    damage: '',
    attribute: '',
    description: '',
  };

  spellLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Niveles de hechizos disponibles
  selectedSpellLevel: number | null = null; // Nivel de hechizo seleccionado
  availableSpells: Spell[] = []; // Lista de hechizos disponibles según el nivel
  selectedSpell: Spell | null = null; // Hechizo seleccionado
  selectedLevel: string | number = ''; // Nivel seleccionado

  // Atributos principales y sus etiquetas
  attributes: Array<{ key: keyof Character['attributes']; label: string }> = [
    { key: 'STR', label: 'Fuerza (STR)' },
    { key: 'DEX', label: 'Destreza (DEX)' },
    { key: 'CON', label: 'Constitución (CON)' },
    { key: 'INT', label: 'Inteligencia (INT)' },
    { key: 'WIS', label: 'Sabiduría (WIS)' },
    { key: 'CHA', label: 'Carisma (CHA)' },
  ];

  skills = [
    { key: 'athletics', name: 'Atletismo', attribute: 'STR' },
    { key: 'acrobatics', name: 'Acrobacias', attribute: 'DEX' },
    { key: 'sleightOfHand', name: 'Juego de Manos', attribute: 'DEX' },
    { key: 'stealth', name: 'Sigilo', attribute: 'DEX' },
    { key: 'arcana', name: 'Conocimiento Arcano', attribute: 'INT' },
    { key: 'history', name: 'Historia', attribute: 'INT' },
    { key: 'investigation', name: 'Investigación', attribute: 'INT' },
    { key: 'nature', name: 'Naturaleza', attribute: 'INT' },
    { key: 'religion', name: 'Religión', attribute: 'INT' },
    { key: 'animalHandling', name: 'Trato con Animales', attribute: 'WIS' },
    { key: 'insight', name: 'Perspicacia', attribute: 'WIS' },
    { key: 'medicine', name: 'Medicina', attribute: 'WIS' },
    { key: 'perception', name: 'Percepción', attribute: 'WIS' },
    { key: 'survival', name: 'Supervivencia', attribute: 'WIS' },
    { key: 'deception', name: 'Engaño', attribute: 'CHA' },
    { key: 'intimidation', name: 'Intimidación', attribute: 'CHA' },
    { key: 'performance', name: 'Interpretación', attribute: 'CHA' },
    { key: 'persuasion', name: 'Persuasión', attribute: 'CHA' },
  ];

  // Control de acordeones
  expanded: { [key: string]: boolean } = {
    STR: false,
    DEX: false,
    CON: false,
    INT: false,
    WIS: false,
    CHA: false,
  };

  newWeapon: Weapon = {
    name: '',
    damage: '',
    type: '',
    attribute: 'STR', // Por defecto
  };

  allClasses: string[] = [
    'Bárbaro',
    'Bardo',
    'Clérigo',
    'Druida',
    'Guerrero',
    'Hechicero',
    'Mago',
    'Monje',
    'Paladín',
    'Pícaro',
    'Explorador',
    'Brujo',
  ];

  isCustomAbilityModalOpen = false;

  newCustomAbility: Partial<Spell> = {
    name: '',
    school: '',
    description: '',
    components: [],
    castingTime: '',
    range: '',
    duration: '',
    damage: undefined,
    classes: this.allClasses, // Todas las clases por defecto
  };

  // Modificadores calculados
  modifiers: Record<'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA', number> = {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  };

  filteredSpells: Spell[] = []; // Hechizos filtrados para la búsqueda
  searchTerm: string = ''; // Término de búsqueda
  isSpellModalOpen: boolean = false; // Controla si el modal está abierto
  selectedClass: string = ''; // Clase seleccionada (o vacío para todas)
  availableClasses: string[] = [
    'Bardo',
    'Brujo',
    'Clérigo',
    'Druida',
    'Explorador',
    'Hechicero',
    'Mago',
    'Paladín',
    // Agrega otras clases aquí
  ];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.dataService.getCharacterById(characterId).subscribe((character) => {
        if (character) {
          this.character = { ...character }; // Carga los datos del personaje
        }
      });
    }
    
    this.spellsSubscription = this.dataService.getSpells().subscribe((spells) => {
      this.spells = spells.sort((a, b) => a.level - b.level);
    });

    this.calculateModifiers(); // Calculamos modificadores iniciales
    this.updateInitiative();
    this.filterSpells(); // Calculamos la iniciativa inicial
  }

  openSpellModal() {
    this.isSpellModalOpen = true;
    this.filterSpells(); // Actualiza la lista de hechizos disponibles
  }

  // Cierra el modal de hechizos
  closeSpellModal() {
    this.isSpellModalOpen = false;
  }

  openCustomAbilityModal() {
    this.isCustomAbilityModalOpen = true;
  }

  closeCustomAbilityModal() {
    this.isCustomAbilityModalOpen = false;
  }

  addCustomAbility() {
    if (
      this.newCustomAbility.name &&
      this.newCustomAbility.description
    ) {
      const customSpell: Spell = {
        name: this.newCustomAbility.name!,
        level: 0,
        school: this.newCustomAbility.school!,
        description: this.newCustomAbility.description!,
        components: [],
        castingTime: this.newCustomAbility.castingTime!,
        range: this.newCustomAbility.range!,
        duration: this.newCustomAbility.duration!,
        damage: this.newCustomAbility.damage || undefined,
        classes: this.allClasses, // Asegura que todas las clases estén incluidas
      };

      this.character.spellcasting.spellsKnown.push(customSpell);
      this.dataService.addSpell(customSpell);
      
      // Limpiar el formulario
      this.newCustomAbility = {
        name: '',
        school: '',
        description: '',
        components: [],
        castingTime: '',
        range: '',
        duration: '',
        damage: "",
        classes: this.allClasses, // Restablecer con todas las clases
      };

      this.closeCustomAbilityModal();
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  filterSpells() {
    // Obtener el menor nivel de hechizo conocido por el personaje
    const knownSpellLevels = this.character.spellcasting?.spellsKnown?.map(spell => spell.level) || [];
    const minKnownSpellLevel = knownSpellLevels.length > 0 ? Math.min(...knownSpellLevels) : 0;
  
    this.filteredSpells = this.spells.filter(spell => {
      const matchesSearchTerm = spell.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesClass = this.selectedClass ? spell.classes.includes(this.selectedClass) : true;
      const matchesLevel = spell.level >= minKnownSpellLevel;
      return matchesSearchTerm && matchesClass && matchesLevel;
    });
  }

  getSpells(): Spell[] {
    return Object.values(spellsLibrary).reduce((acc, spells) => acc.concat(spells), []);
  }


  // Calcula los modificadores para todas las características
  calculateModifiers() {
    for (const key of Object.keys(this.character.attributes) as Array<
      keyof typeof this.character.attributes
    >) {
      this.modifiers[key] = Math.floor((this.character.attributes[key] - 10) / 2);
    }
  }

  // Calcula automáticamente el bonificador de competencia
  updateProficiencyBonus() {
    const level = this.character.level;
    if (level >= 1 && level <= 4) this.character.proficiency = 2;
    else if (level >= 5 && level <= 8) this.character.proficiency = 3;
    else if (level >= 9 && level <= 12) this.character.proficiency = 4;
    else if (level >= 13 && level <= 16) this.character.proficiency = 5;
    else if (level >= 17) this.character.proficiency = 6;
  }

  // Actualiza la iniciativa basada en el modificador de DEX
  updateInitiative() {
    this.character.secondaryStats.initiative = this.modifiers['DEX'];
  }

  // Valida los valores de los atributos y recalcula modificadores
  validateAttribute(attributeKey: keyof typeof this.character.attributes) {
    let value = this.character.attributes[attributeKey];
    value = Math.min(Math.max(value, 0), 20); // Limita el valor entre 0 y 20
    this.character.attributes[attributeKey] = value;
    this.calculateModifiers();
    this.updateInitiative(); // Recalcula la iniciativa si cambia DEX
  }

  updateSavingThrow(attributeKey: keyof typeof this.character.savingThrows) {
    // Opcional: puedes disparar cálculos adicionales si es necesario
    console.log(
      `Proficiency for ${attributeKey}: ${this.character.savingThrows[attributeKey]}`
    );
  }

  // Obtiene las habilidades relacionadas con un atributo
  getSkillsByAttribute(attributeKey: string) {
    return this.skills.filter(skill => skill.attribute === attributeKey);
  }

  // Calcula el modificador de una habilidad
  calculateSkillModifier(skillKey: string): number {
    const skill = this.skills.find(s => s.key === skillKey);
    if (!skill) return 0;
    const baseModifier = this.modifiers[skill.attribute as keyof Character['attributes']];
    const proficiencyBonus = this.character.skills[skillKey] ? this.character.proficiency : 0;
    return baseModifier + proficiencyBonus;
  }

  // Alterna el estado del acordeón
  toggleAccordion(attributeKey: string) {
    this.expanded[attributeKey] = !this.expanded[attributeKey];
  }

  addItem(): void {
    if (!this.newItem.name || !this.newItem.type) {
      alert('Por favor, rellena los campos necesarios.');
      return;
    }

    this.character.equipment.items.push({ ...this.newItem });
    this.newItem = { type: '', name: '', damage: '', attribute: '', description: '' };
  }

  removeItem(index: number): void {
    this.character.equipment.items.splice(index, 1);
  }

  updateSpellList() {
    this.availableSpells = spellsLibrary[this.selectedSpellLevel || 1] || [];
  }

  // Añade un hechizo desde la lista seleccionada
  addSpell(spell: Spell): void {
    if (!this.character.spellcasting?.spellsKnown) {
      this.character.spellcasting = { spellSlots: {}, spellsKnown: [] };
    }

    // Añade el hechizo a la lista de conocidos
    this.character.spellcasting.spellsKnown?.push(spell);

    // Actualiza la lista filtrada para reflejar los cambios
    this.filteredSpells = this.getFilteredSpells();
  }

  removeSpell(spell: Spell): void {
    if (!this.character.spellcasting?.spellsKnown) {
      return;
    }
    this.character.spellcasting.spellsKnown = this.character.spellcasting.spellsKnown.filter(
      (s) => s.name !== spell.name
    );
  }


  selectSpell(spell: Spell) {
    this.character.spellcasting?.spellsKnown?.push(spell);
    this.closeSpellModal();
  }

  getSpellSlot(level: number): number {
    return this.character.spellcasting?.spellSlots[level as keyof typeof this.character.spellcasting.spellSlots]?.remaining ?? 0;
  }

  setSpellSlot(level: number, value: number): void {
    if (!this.character.spellcasting) {
      this.character.spellcasting = { spellSlots: {}, spellsKnown: [] };
    }
    this.character.spellcasting.spellSlots[level as keyof typeof this.character.spellcasting.spellSlots] = { max: value, remaining: value };
  }

  onSpellSlotChange(event: any, level: number): void {
    const target = event.target as HTMLIonInputElement | null;

    // Validar que target y su valor no sean nulos o indefinidos
    if (!target || target.value === null || target.value === undefined) {
      return;
    }

    // Convertir el valor a número y actualizar el slot
    const value = +target.value || 0; // Convertir a número, o 0 si no es válido

    if (value > 6) {
      this.setSpellSlot(level, 6);
    } else {
      this.setSpellSlot(level, value);
    }
  }

  getFilteredSpells(): Spell[] {
    
    // Filtrar por hechizos ya añadidos
    const spellsKnownNames = this.character.spellcasting?.spellsKnown?.map(spell => spell.name) || [];
    let filteredSpells = this.spells.filter(spell => !spellsKnownNames.includes(spell.name));

    // Filtrar por nivel
    if (this.selectedLevel) {
      filteredSpells = filteredSpells.filter((spell: Spell) => spell.level === this.selectedLevel);
    }

    // Filtrar por clase
    if (this.selectedClass) {
      filteredSpells = filteredSpells.filter((spell: Spell) =>
        spell.classes?.includes(this.selectedClass)
      );
    }

    // Filtrar por término de búsqueda
    if (this.searchTerm.trim()) {
      filteredSpells = filteredSpells.filter((spell: Spell) =>
        spell.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        spell.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    return filteredSpells;
  }

  getSpellsByClassAndLevel(
    spellClass: string,
    level: number
  ): Spell[] {
    if (!spellsLibrary[level]) return [];
    return spellsLibrary[level].filter((spell) =>
      spell.classes.includes(spellClass)
    );
  }

  calculateModifier(attributeValue: number): number {
    if (!attributeValue || attributeValue <= 0) return -5; // Valor mínimo
    return Math.floor((attributeValue - 10) / 2); // Fórmula estándar para modificadores
  }

  saveCharacter() {
    if (this.character.name.trim() === '' || this.character.class.trim() === '') {
      alert('Por favor, completa los campos Nombre y Clase antes de guardar.');
      return;
    }

    if (this.character.id === 'new') {
      // Crear un nuevo personaje
      this.character.id = this.generateUniqueId(); // Generar un ID único basado en el tiempo
      this.character.picture = 'https://via.placeholder.com/150'; // Imagen por defecto
      this.character.deathSaves = 0; // Inicialmente sin éxitos ni fallos
      this.dataService.addCharacter(this.character);
    } else {
      // Actualizar un personaje existente
      this.character.picture = 'https://via.placeholder.com/150'; // Imagen por defecto
      this.character.deathSaves = 0; // Inicialmente sin éxitos ni fallos
      const index = this.character.id ? this.character.id : -1;
      if (index !== -1) {
        this.dataService.updateCharacterById(this.character.id, this.character);
      }
    }

    alert('Personaje guardado con éxito.');
    this.router.navigate(['/character-list']);
  }

  private generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 16);
  }

}
function readFileSync(arg0: string, arg1: string): string {
  throw new Error('Function not implemented.');
}

