import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  CollectionReference,
  DocumentData,
  collectionData,
  addDoc,
  doc,
  docData,
  updateDoc,
  deleteDoc,
  query,
  where,
  writeBatch,
  getDocs,
  QueryConstraint,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private readonly firestore: Firestore) {}

  collectionRef<T extends DocumentData>(path: string): CollectionReference<T> {
    return collection(this.firestore, path) as CollectionReference<T>;
  }

  collectionDataWithId<T extends DocumentData>(path: string): Observable<T[]> {
    const ref = this.collectionRef<T>(path);
    return collectionData(ref, { idField: 'id' }) as Observable<T[]>;
  }

  collectionDataWithQuery<T extends DocumentData>(
    path: string,
    constraints: QueryConstraint[]
  ): Observable<T[]> {
    const ref = this.collectionRef<T>(path);
    const queryRef = query(ref, ...constraints);
    return collectionData(queryRef, { idField: 'id' }) as Observable<T[]>;
  }

  docDataWithId<T extends DocumentData>(path: string, id: string): Observable<T | undefined> {
    const ref = doc(this.firestore, path, id) as any;
    return docData(ref, { idField: 'id' }) as Observable<T | undefined>;
  }

  async add<T extends DocumentData>(path: string, payload: T): Promise<void> {
    const ref = this.collectionRef<T>(path);
    await addDoc(ref, payload);
  }

  async update<T extends DocumentData>(path: string, id: string, payload: Partial<T>): Promise<void> {
    const ref = doc(this.firestore, path, id) as any;
    await updateDoc(ref, payload as DocumentData);
  }

  async remove(path: string, id: string): Promise<void> {
    const ref = doc(this.firestore, path, id);
    await deleteDoc(ref);
  }

  async queryByField<T extends DocumentData>(path: string, field: string, value: unknown): Promise<T[]> {
    const ref = this.collectionRef<T>(path);
    const snapshot = await getDocs(query(ref, where(field, '==', value)));
    return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as T));
  }

  getBatch() {
    return writeBatch(this.firestore);
  }
}
