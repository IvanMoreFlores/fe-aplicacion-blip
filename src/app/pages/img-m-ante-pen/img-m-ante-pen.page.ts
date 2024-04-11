import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-img-m-ante-pen',
  templateUrl: './img-m-ante-pen.page.html',
  styleUrls: ['./img-m-ante-pen.page.scss'],
})
export class ImgMAntePenPage implements OnInit {

  antePen:string='';
  imagesAttached: boolean = false; // Variable para indicar si se adjuntaron las imágenes

  // slideOpts = {
  //   initialSlide: 1,
  //   speed: 400,
  //   slidesPerView: 1,
  //   loop: true,
  // };

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);

      this.antePen = params['antepen'];

      console.log('DNI FRONT:', this.antePen);


      // Verificar si se adjuntaron las imágenes
      if (params['imagesAttached']) {
        this.imagesAttached = true;
      }

      console.log('Images Attached:', this.imagesAttached);

      this.initSwiper();
    });
  }

  initSwiper() {
    const mySwiper = new Swiper('.swiper-container', {
      // Configuración de Swiper
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

}
