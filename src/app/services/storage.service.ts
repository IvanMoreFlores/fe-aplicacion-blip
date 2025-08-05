import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private _initPromise: Promise<void>;

  constructor(private storage: Storage) {
    this._initPromise = this.init();
  }

  private async init() {
    if (!this._storage) {
      this._storage = await this.storage.create();
      console.log('Storage inicializado');
    }
  }

  private async ready() {
    if (!this._storage) {
      await this._initPromise;
    }
  }

  async setItem(key: string, value: any): Promise<void> {
    await this.ready();
    await this._storage?.set(key, value);
  }

  async getItem(key: string): Promise<any> {
    await this.ready();
    return await this._storage?.get(key);
  }

  async removeItem(key: string): Promise<void> {
    await this.ready();
    await this._storage?.remove(key);
  }

  async clear(): Promise<void> {
    await this.ready();
    await this._storage?.clear();
  }
}
