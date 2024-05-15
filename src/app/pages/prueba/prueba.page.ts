import { Component, OnInit } from '@angular/core';
import Dropzone from 'dropzone';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {
  ngAfterViewInit() {
    Dropzone.autoDiscover = false;
    new Dropzone('#my-dropzone', {
      url: '/upload', // Cambia esto a tu URL de subida
      paramName: 'file',
      maxFilesize: 2, // Tamaño máximo de archivo en MB
      addRemoveLinks: true
    });
  }
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}