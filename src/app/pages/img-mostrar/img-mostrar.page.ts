import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-img-mostrar',
  templateUrl: './img-mostrar.page.html',
  styleUrls: ['./img-mostrar.page.scss'],
  

})

export class ImgMostrarPage implements OnInit {

  dniFront:string= '';
  dniBack:string='';
  
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    loop: true,
  };
  
  
  
  constructor(private route: ActivatedRoute){}

  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);

      this.dniFront = params['dnifront'];
      this.dniBack = params['dniback'];

      console.log('DNI FRONT:', this.dniFront);
      console.log('DNI BACK:', this.dniBack);
      this.initSwiper();
   })
   
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


