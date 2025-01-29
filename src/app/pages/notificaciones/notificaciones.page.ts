import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  textoMostrado: string = 'Texto del botón 1'; 

  constructor() { }

  ngOnInit() {
  }

  mostrarTexto(texto: string) {
    this.textoMostrado = texto;
  }
}
