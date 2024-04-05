import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-mostra-esta',
  templateUrl: './mostra-esta.page.html',
  styleUrls: ['./mostra-esta.page.scss'],
})
export class MostraEstaPage implements OnInit {

  esta1:string= '';
  esta2:string='';
  esta3:string='';
  
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

      this.esta1 = params['esTa1'];
      this.esta2 = params['esTa2'];
      this.esta3 = params['esTa3'];

      console.log('ESTACIONAMIENTO 1', this.esta1);
      console.log('ESTACIONAMIENTO 2', this.esta2);
      console.log('ESTACIONAMIENTO 3', this.esta3);
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
