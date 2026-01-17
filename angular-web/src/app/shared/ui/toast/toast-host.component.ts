import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast-host',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  template: `
    <div class="toast-container">
      <div
        class="toast"
        *ngFor="let toast of toastService.messages$ | async"
        [class.success]="toast.type === 'success'"
        [class.error]="toast.type === 'error'"
        [class.info]="toast.type === 'info'"
      >
        {{ toast.text }}
      </div>
    </div>
  `,
})
export class ToastHostComponent {
  constructor(readonly toastService: ToastService) {}
}
