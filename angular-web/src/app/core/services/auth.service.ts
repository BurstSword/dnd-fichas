import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly user$: Observable<User | null>;

  constructor(private readonly auth: Auth) {
    this.user$ = authState(this.auth);
  }

  signIn(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password).then(() => undefined);
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
