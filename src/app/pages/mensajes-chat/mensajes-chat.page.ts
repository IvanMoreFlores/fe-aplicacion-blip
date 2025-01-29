import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-chat',
  templateUrl: './mensajes-chat.page.html',
  styleUrls: ['./mensajes-chat.page.scss'],
})
export class MensajesChatPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }
  
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
