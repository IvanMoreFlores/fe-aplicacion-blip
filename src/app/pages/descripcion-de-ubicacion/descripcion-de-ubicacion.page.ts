import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-de-ubicacion',
  templateUrl: './descripcion-de-ubicacion.page.html',
  styleUrls: ['./descripcion-de-ubicacion.page.scss'],
})
export class DescripcionDeUbicacionPage implements OnInit {

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

  selectMap() {
    this.router.navigate(['/descripcion-del-mapa'], {
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

  getUbicacion(){
    
  }

}
