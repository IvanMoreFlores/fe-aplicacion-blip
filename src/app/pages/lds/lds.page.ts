import { Component, OnInit } from '@angular/core';
import Dropzone from 'dropzone';

@Component({
  selector: 'app-lds',
  templateUrl: './lds.page.html',
  styleUrls: ['./lds.page.scss'],
})
export class LdsPage implements OnInit {
  ngAfterViewInit() {
    Dropzone.autoDiscover = false;
    new Dropzone('#my-dropzone', {
      url: '/upload', // Cambia esto a tu URL de subida
      paramName: 'file',
      maxFilesize: 2, // Tamaño máximo de archivo en MB
      addRemoveLinks: true
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
