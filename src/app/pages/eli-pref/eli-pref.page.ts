import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eli-pref',
  templateUrl: './eli-pref.page.html',
  styleUrls: ['./eli-pref.page.scss'],
})
export class EliPrefPage implements OnInit {

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
      this.uga_direcc = params['uga_direcc'];
      this.uga_lat = params['uga_lat'];
      this.uga_long = params['uga_long'];
    });
  }

  getValues(){
    console.log(this.tga_id);
    console.log(this.direccion); 
    console.log(this.distrito);
    console.log(this.ciudad);
    console.log(this.referencia);
    console.log(this.detalles);
    console.log(this.servicio);
    console.log(this.gar_largo);
    console.log(this.gar_ancho);
    console.log(this.gar_alto);
    console.log(this.uga_direcc);
    console.log(this.uga_lat);
    console.log(this.gar_alto);

    this.router.navigate(['/configuracion-alquilar'], {
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
