import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-destacados',
  templateUrl: './mensajes-destacados.page.html',
  styleUrls: ['./mensajes-destacados.page.scss'],
})
export class MensajesDestacadosPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
