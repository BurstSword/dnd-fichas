import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from '@angular/fire/app';
import { getFirestore, Firestore } from '@angular/fire/firestore';
import { getAuth, Auth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { firebase } from 'src/environments/firebaseconfig';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app: FirebaseApp;
  public firestore: Firestore;
  public auth: Auth;

  constructor() {
    // Inicializar Firebase
    this.app = initializeApp(firebase);

    // Inicializar Firestore
    this.firestore = getFirestore(this.app);

    // Inicializar Auth
    this.auth = getAuth(this.app);

    console.log('🔥 Firebase inicializado correctamente');
  }

  // Método de ejemplo para obtener datos de Firestore
  async getCollection(collectionPath: string) {
    const { collection, getDocs } = await import('firebase/firestore');
    const colRef = collection(this.firestore, collectionPath);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
