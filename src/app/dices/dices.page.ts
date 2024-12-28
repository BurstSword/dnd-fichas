import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.page.html',
  styleUrls: ['./dices.page.scss'],
})
export class DicesPage implements OnInit {

  diceTypes = [4, 6, 8, 10, 12, 20]; // Tipos de dados
  selectedDiceQuantities: { [key: number]: number } = {}; // Cantidades seleccionadas
  diceResults: { type: number; value: number }[] = []; // Resultados de los dados

  constructor() {
    // Inicializa las cantidades seleccionadas a 0
    this.diceTypes.forEach((dice) => (this.selectedDiceQuantities[dice] = 0));
  }

  ngOnInit() {
    this.diceTypes.forEach((dice) => {
      this.selectedDiceQuantities[dice] = 0; // Inicializa a 0
    });
  }


  // Incrementar el valor del dado
  increaseDiceQuantity(dice: number): void {
    this.selectedDiceQuantities[dice]++;
  }

  // Decrementar el valor del dado (hasta 0)
  decreaseDiceQuantity(dice: number): void {
    if (this.selectedDiceQuantities[dice] > 0) {
      this.selectedDiceQuantities[dice]--;
    }
  }

  rollDice() {
    this.diceResults = []; // Reiniciamos los resultados
    for (const [type, quantity] of Object.entries(this.selectedDiceQuantities)) {
      const numType = parseInt(type, 10); // Convertimos el tipo a número
      for (let i = 0; i < quantity; i++) {
        const roll = Math.floor(Math.random() * numType) + 1; // Genera un número aleatorio
        this.diceResults.push({ type: numType, value: roll }); // Almacenamos el resultado
      }
    }
  }

}
