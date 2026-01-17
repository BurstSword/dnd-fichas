import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

@Component({
  selector: 'app-dices',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">Dice Roller</h1>
        <p class="text-secondary">Quick rolls for ability checks and combat.</p>
      </div>
    </div>

    <div class="grid two">
      <button class="button" *ngFor="let die of dice" (click)="roll(die)">
        Roll d{{ die }}
      </button>
    </div>

    <section class="card section" *ngIf="history.length">
      <h2>History</h2>
      <ul>
        <li *ngFor="let item of history">d{{ item.die }} → {{ item.result }}</li>
      </ul>
    </section>
  `,
  styles: [
    `
      .text-secondary {
        color: var(--text-secondary);
        margin: 4px 0 0;
      }

      ul {
        padding-left: 16px;
        margin: 0;
      }
    `,
  ],
})
export class DicesPage {
  readonly dice = [4, 6, 8, 10, 12, 20];
  history: Array<{ die: number; result: number }> = [];

  constructor(private readonly toastService: ToastService) {}

  roll(die: number): void {
    const result = Math.floor(Math.random() * die) + 1;
    this.history = [{ die, result }, ...this.history].slice(0, 10);
    this.toastService.show(`Rolled d${die}: ${result}`, 'info');
  }
}
