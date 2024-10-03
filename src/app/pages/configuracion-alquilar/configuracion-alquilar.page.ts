import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuracion-alquilar',
  templateUrl: './configuracion-alquilar.page.html',
  styleUrls: ['./configuracion-alquilar.page.scss'],
})
export class ConfiguracionAlquilarPage implements OnInit {
  isChecked: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  onChange(event: any) {
    this.isChecked = event.target.checked;
    console.log('Checkbox checked:', this.isChecked);
  } distritoData: any;
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
  dis_id: number = 0;
  tve_id: number[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.setValues();
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
      this.dis_id = params['dis_id'];
    });
  }

  ngOnInit() {
  }

  // Función para manejar los cambios en los checkboxes
  onCheckboxChange(servicioId: number, isChecked: boolean) {
      
    if (isChecked) {
      console.log('checked')
      // Si el checkbox está seleccionado, agrega el servicio al array
      this.tve_id.push(servicioId);
      console.log(this.tve_id);
    } else {
      console.log('unchecked')
      // Si está deseleccionado, remuévelo del array

      this.tve_id = this.tve_id.filter(id => id !== servicioId);
      console.log(this.tve_id);
    }
    
  }

  getValues(){
    //routerLink="/img-esta"

    this.router.navigate(['/img-esta'], {
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
        uga_long: this.uga_long,
        dis_id : this.dis_id,
        tve_id : this.tve_id
      }
    });

  }

  return(){
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
        uga_direcc: this.uga_direcc,
        uga_lat: this.uga_lat,
        uga_long: this.uga_long,
        dis_id : this.dis_id
      }
    });
  }

}
