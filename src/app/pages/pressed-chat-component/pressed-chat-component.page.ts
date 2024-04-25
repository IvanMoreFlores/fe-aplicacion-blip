import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pressed-chat-component',
  templateUrl: './pressed-chat-component.page.html',
  styleUrls: ['./pressed-chat-component.page.scss'],
})
export class PressedChatComponentPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
