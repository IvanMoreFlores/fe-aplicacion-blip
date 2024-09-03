import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';///sliders

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private modalController: ModalController) {} // Inyecta el ModalController

  ngOnInit() {

  }
  selectedContent: string = 'Todos'; // Inicializa con "Todos" seleccionado por defecto
  async exit() {
    
    await this.modalController.dismiss();
  }
  changeContent(content: string) {
    this.selectedContent = content; // Cambia el contenido seleccionado
  }

}
