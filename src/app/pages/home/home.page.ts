import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';///sliders
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  selectedContent: string = 'Todos';
  data: any;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private storage: StorageService,
    private api: ApiService
  ) { } // Inyecta el ModalController

  ngOnInit() {
    this.getReservas();
  }

  async exit() {
    await this.modalController.dismiss();
  }
  changeContent(content: string) {
    this.selectedContent = content; // Cambia el contenido seleccionado
  }

  async sesion_close() {
    await this.storage.removeItem('token');
    await this.modalController.dismiss();
    this.router.navigate(['/login']);
  }

  async getReservas() {
    const token = await this.storage.getItem('token');
    this.api.getReservations(token).subscribe(
      async (response: any) => {
        this.data = response.data;
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }

}
