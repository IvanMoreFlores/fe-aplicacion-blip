import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { Pagination } from 'swiper';

// Activa los módulos necesarios para Swiper
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.page.html',
  styleUrls: ['./image-viewer.page.scss'],
})
export class ImageViewerPage implements OnInit {
  photos: string[] = [];
  currentIndex: number = 0; // Índice inicial
  totalSlides: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Recibe las fotos y el índice inicial desde los parámetros de consulta
    this.route.queryParams.subscribe((params) => {
      this.photos = JSON.parse(params['photos']);
      this.currentIndex = +params['index'];
      this.totalSlides = this.photos.length;

      // Inicializa Swiper con el índice inicial
      const swiper = new SwiperCore('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        initialSlide: this.currentIndex, // Configura el índice inicial
        on: {
          slideChange: () => {
            this.currentIndex = swiper.activeIndex; // Actualiza el índice actual
          },
        },
      });
    });
  }
}
