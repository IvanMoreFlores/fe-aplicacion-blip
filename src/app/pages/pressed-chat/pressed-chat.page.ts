import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pressed-chat',
  templateUrl: './pressed-chat.page.html',
  styleUrls: ['./pressed-chat.page.scss'],
})
export class PressedChatPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
