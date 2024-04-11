import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-config',
  templateUrl: './menu-config.page.html',
  styleUrls: ['./menu-config.page.scss'],
})
export class MENUCONFIGPage implements OnInit {
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
