import { Component, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-ante-penal',
  templateUrl: './ante-penal.page.html',
  styleUrls: ['./ante-penal.page.scss'],
})
export class AntePenalPage implements OnInit {
  showLoader: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  cargando(){
    this.showLoader = true;
  }

}
