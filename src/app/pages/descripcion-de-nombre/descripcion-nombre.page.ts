import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-nombre',
  templateUrl: './descripcion-nombre.page.html',
  styleUrls: ['./descripcion-nombre.page.scss'],
})
export class DescripcionNombrePage implements OnInit {
  gar_nombre: string = '';
  tga_id: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tga_id = params['tga_id'] || '';
    });
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  nextPage() {
    const palabras = this.gar_nombre.trim().split(/\s+/); // divide por espacios múltiples
    if (palabras.length < 1) {
      alert('El nombre del anuncio debe tener al menos dos palabras.');
      return;
    }

    this.router.navigate(['/descripcion-del-espacio'], {
      queryParams: {
        gar_nombre: this.gar_nombre,
        tga_id: this.tga_id
      },
    });
  }
}
