import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-menu-config',
  templateUrl: './menu-config.page.html',
  styleUrls: ['./menu-config.page.scss'],
})
export class MENUCONFIGPage implements OnInit {
  switchValue: boolean = false; // Valor inicial del switch
  selectedContent: string = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };
  
  constructor(private modalController: ModalController, private cdr: ChangeDetectorRef) { }

  ngOnInit() {}

  async changeContent(content: string) {
    this.selectedContent = content; // Cambia el contenido seleccionado

    if (this.selectedContent === 'Todos') {
      // Usa un timeout para asegurarte de que el DOM esté actualizado
      setTimeout(() => {
        this.iniciarSwiper();
      }, 0);
    }
  }

  iniciarSwiper() {
    const miSwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  async dismissModal() {
    await this.modalController.dismiss(null, 'open-modal_apagongeneral');
    this.switchValue = false;
    this.cdr.detectChanges();
  }
}
