import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-marcar-leido',
  templateUrl: './mensajes-marcar-leido.page.html',
  styleUrls: ['./mensajes-marcar-leido.page.scss'],
})
export class MensajesMarcarLeidoPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
