import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'info' | 'success' | 'error';

export interface ToastMessage {
  id: string;
  text: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly messagesSubject = new BehaviorSubject<ToastMessage[]>([]);
  readonly messages$ = this.messagesSubject.asObservable();

  show(text: string, type: ToastType = 'info', durationMs = 3000): void {
    const id = `${Date.now()}-${Math.random()}`;
    const message: ToastMessage = { id, text, type };
    this.messagesSubject.next([...this.messagesSubject.value, message]);

    setTimeout(() => this.dismiss(id), durationMs);
  }

  dismiss(id: string): void {
    this.messagesSubject.next(this.messagesSubject.value.filter((msg) => msg.id !== id));
  }
}
