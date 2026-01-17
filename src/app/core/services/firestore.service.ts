import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QueryFn,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  collection<T>(path: string, queryFn?: QueryFn): AngularFirestoreCollection<T> {
    return this.firestore.collection<T>(path, queryFn);
  }

  getBatch() {
    return this.firestore.firestore.batch();
  }
}
