import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

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
  map!: L.Map;

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

  async getUbicacion() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
          await fetch(url)
            .then(response => response.json())
            .then(data => {
              if (data && data.display_name) {
                const uga_direcc = data.display_name;

                this.router.navigate(['/eli-pref'], {
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
                    uga_long: lon,
                    uga_lat: lat,
                    uga_direcc: uga_direcc
                  }
                });

              }
            });

        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
          alert('No se pudo obtener la ubicación. Verifica los permisos de ubicación.');
        }
      );
    } else {
      alert('La geolocalización no es compatible con este navegador.');
    }
  }

  return() {

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
