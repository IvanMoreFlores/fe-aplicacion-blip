import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones-not',
  templateUrl: './notificaciones-not.page.html',
  styleUrls: ['./notificaciones-not.page.scss'],
})
export class NotificacionesNotPage implements OnInit {
  textoMostrado: string = 'Texto del botón 1'; 

  constructor() { }

  ngOnInit() {
  }

  mostrarTexto(texto: string) {
    this.textoMostrado = texto;
  }
}
