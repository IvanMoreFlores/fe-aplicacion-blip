import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-como-mido-mi-espacio',
  templateUrl: './descripcion-como-mido-mi-espacio.page.html',
  styleUrls: ['./descripcion-como-mido-mi-espacio.page.scss'],
})
export class DescripcionComoMidoMiEspacioPage implements OnInit {

  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  servicio: number[] = [];
  checkBox1: any;
  gar_largo: string = '';
  gar_ancho: string = '';
  gar_alto: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.setValues();
  }

  ngOnInit() {
  }

  async setValues() {
    this.route.queryParams.subscribe(params => {
      this.tga_id = params['tga_id'];
      this.direccion = params['direccion'];
      this.distrito = params['distrito'];
      this.ciudad = params['ciudad'];
      this.referencia = params['referencia'];
      this.detalles = params['detalles'];
      this.servicio = params['servicio'];
      this.gar_largo = params['gar_largo'];
      this.gar_ancho = params['gar_ancho'];
      this.gar_alto = params['gar_alto'];
    });
  }

  async getValues() {
    this.router.navigate(['/descripcion-de-medidas-del-espacio'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
        servicio: this.servicio,
        gar_largo: this.gar_largo,
        gar_ancho: this.gar_ancho,
        gar_alto: this.gar_alto
      }
    });
  }

}
