import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-marcar-no-leido',
  templateUrl: './mensajes-marcar-no-leido.page.html',
  styleUrls: ['./mensajes-marcar-no-leido.page.scss'],
})
export class MensajesMarcarNoLeidoPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
