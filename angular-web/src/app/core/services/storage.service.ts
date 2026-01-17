import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private readonly storage: Storage) {}

  async uploadFile(path: string, file: File): Promise<string> {
    const fileRef = ref(this.storage, path);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
  }
}
