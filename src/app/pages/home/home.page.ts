import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';///sliders
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    private router: Router,
    private modalController: ModalController,
    private storageService: StorageService
  ) {} // Inyecta el ModalController

  ngOnInit() {

  }
  selectedContent: string = 'Todos'; // Inicializa con "Todos" seleccionado por defecto
  async exit() {
    
    await this.modalController.dismiss();
  }
  changeContent(content: string) {
    this.selectedContent = content; // Cambia el contenido seleccionado
  }

 async sesion_close(){
     await this.storageService.removeItem('token');
     await this.modalController.dismiss();
     this.router.navigate(['/login']);
  }

}
