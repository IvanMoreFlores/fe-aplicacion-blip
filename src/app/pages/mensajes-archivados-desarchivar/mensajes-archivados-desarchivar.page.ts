import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-archivados-desarchivar',
  templateUrl: './mensajes-archivados-desarchivar.page.html',
  styleUrls: ['./mensajes-archivados-desarchivar.page.scss'],
})
export class MensajesArchivadosDesarchivarPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
