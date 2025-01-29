import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-view-est',
  templateUrl: './pre-view-est.page.html',
  styleUrls: ['./pre-view-est.page.scss'],
})
export class PreViewEstPage implements OnInit {
  selectedTab: string = 'descripcion';
  photos: string[] = [
    '/assets/images/cor-neg.svg',
    '/assets/images/cor-neg.svg',
    '/assets/images/cor-neg.svg',
    '/assets/images/cor-neg.svg',
    '/assets/images/cor-neg.svg',
    '/assets/images/cor-neg.svg',
    '/assets/images/cor-neg.svg',
  ];

  constructor(private router: Router) {}

  viewImage(index: number) {
    this.router.navigate(['/image-viewer'], {
      queryParams: {
        photos: JSON.stringify(this.photos), // Envía todas las fotos como JSON
        index: index, // Índice inicial
      },
    });
  }
  

  ngOnInit() {}
}

