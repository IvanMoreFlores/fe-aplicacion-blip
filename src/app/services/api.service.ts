import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  // Inicializar el Storage sin borrar los datos existentes
  async init() {
    if (this._storage === null) {  // Verifica si el almacenamiento ya ha sido inicializado
      this._storage = await this.storage.create();
      console.log('crea almacenamiento')
    }
  }

  // Guardar un valor
  async setItem(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
  }

  // Obtener un valor
  async getItem(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // Eliminar un valor
  async removeItem(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  // Limpiar el Storage
  async clear(): Promise<void> {
    await this._storage?.clear();
  }
}
