import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-archivados',
  templateUrl: './mensajes-archivados.page.html',
  styleUrls: ['./mensajes-archivados.page.scss'],
})
export class MensajesArchivadosPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
