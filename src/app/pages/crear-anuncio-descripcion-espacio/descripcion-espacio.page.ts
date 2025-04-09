import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-espacio',
  templateUrl: './descripcion-espacio.page.html',
  styleUrls: ['./descripcion-espacio.page.scss'],
})
export class DescripcionEspacioPage implements OnInit {
  descripcion: string = '';
  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  lat: number = 0;
  lng: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.setValues();
  }
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  nextPage() {
    this.router.navigate(['/descripcion-de-servicios-adicionales'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
        descripcion: this.descripcion,
        lat: this.lat,
        lng: this.lng,
      },
    });
  }
  setValues() {
    this.route.queryParams.subscribe((params) => {
      this.tga_id = params['tga_id'];
      this.direccion = params['direccion'];
      this.distrito = params['distrito'];
      this.ciudad = params['ciudad'];
      this.referencia = params['referencia'];
      this.detalles = params['detalles'];
      this.lat= params['lat'];
      this.lng= params['lng'];
    });
  }
}
