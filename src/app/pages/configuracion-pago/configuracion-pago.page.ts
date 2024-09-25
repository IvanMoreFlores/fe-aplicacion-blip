import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { asapScheduler } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuracion-pago',
  templateUrl: './configuracion-pago.page.html',
  styleUrls: ['./configuracion-pago.page.scss'],
})
export class ConfiguracionPagoPage {

  @ViewChildren('customBtn') customBtns!: QueryList<ElementRef>;
  selectedIndex: number | null = null;
  description: boolean = false;
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

  cargando() {
    this.description = true;
  }

  onRadioChange(selectedIndex: number) {
    this.dis_id = selectedIndex;
    this.selectedIndex = selectedIndex; // Actualiza el índice seleccionado
    this.customBtns.forEach((btn, index) => {
      if (index === selectedIndex) {
        this.dis_id = index;
        btn.nativeElement.classList.add('custom-btn-selected'); // Añade la clase seleccionada
      } else {
        btn.nativeElement.classList.remove('custom-btn-selected'); // Elimina la clase de los otros botones
      }
    });

  }

  sendData() {
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
        uga_long: this.uga_long,
        dis_id: this.dis_id
      }
    });
  }

  return() {
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
        uga_long: this.uga_long
      }
    });
  }

}
