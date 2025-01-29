import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-marcar-destacado',
  templateUrl: './mensajes-marcar-destacado.page.html',
  styleUrls: ['./mensajes-marcar-destacado.page.scss'],
})
export class MensajesMarcarDestacadoPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
