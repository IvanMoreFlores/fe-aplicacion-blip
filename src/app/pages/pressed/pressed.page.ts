import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pressed',
  templateUrl: './pressed.page.html',
  styleUrls: ['./pressed.page.scss'],
})
export class PressedPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
