import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;
  private readonly url: string = 'ws://44.213.46.131:3000'; // Cambia esto a la URL de tu servidor

  constructor() {
    this.socket = io(this.url);
  }

  // Método para conectarse al socket con token
  connect(token: string) {
    this.socket = io(this.url, {
      extraHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('conectando a socket');
    this.socket = io(this.url);
  }

  // Método para desconectarse del socket
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  // Método para emitir eventos al servidor
  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  // Método para escuchar eventos desde el servidor
  on(eventName: string, callback: (data: any) => void) {
    console.log('obtiene evento');
    this.socket.on(eventName, callback);
  }
}
