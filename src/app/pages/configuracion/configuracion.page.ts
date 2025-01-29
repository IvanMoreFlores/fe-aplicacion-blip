import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  servicio: string[] = [];
  gar_largo: string = '';
  gar_ancho: string = '';
  gar_alto: string = '';
  uga_direcc: string = '';
  uga_lat: string = '';
  uga_long: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
      this.uga_direcc = params['uga_direcc'];
      this.uga_lat = params['uga_lat'];
      this.uga_long = params['uga_long'];
    });
  }

  return(){
    this.router.navigate(['/configuracion'], {
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
        gar_alto: this.gar_alto,
        uga_direcc: this.uga_direcc,
        uga_lat: this.uga_lat,
        uga_long: this.uga_long
      }
    });
  }

}
