import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-de-medidas-del-espacio',
  templateUrl: './descripcion-de-medidas-del-espacio.page.html',
  styleUrls: ['./descripcion-de-medidas-del-espacio.page.scss'],
})
export class DescripcionDeMedidasDelEspacioPage implements OnInit {
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
  descripcion: string = '';
  lat: number = 0;
  lng: number = 0;

  @ViewChildren('customBtn') customBtns!: QueryList<ElementRef>;
  selectedIndex: number | null = null; // Inicialmente ningún botón seleccionado

  constructor(private router: Router, private route: ActivatedRoute) {}

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  ngOnInit() {
    this.setValues();
  }

  onRadioChange(selectedIndex: number, position: number) {
    this.selectedIndex = selectedIndex; // Actualiza el índice seleccionado
    this.customBtns.forEach((btn, index) => {
      if (index === position - 1) {
        btn.nativeElement.classList.add('custom-btn-selected'); // Añade la clase seleccionada
      } else {
        btn.nativeElement.classList.remove('custom-btn-selected'); // Elimina la clase de los otros botones
      }
    });
  }

  async setValues() {
    this.route.queryParams.subscribe((params) => {
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
      this.descripcion = params['descripcion'];
      this.lat = params['lat'];
      this.lng = params['lng'];
    });
  }

  async indicacion() {
    this.router.navigate(['/descripcion-como-mido-mi-espacio'], {
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
      },
    });
  }

  async nextPage() {

    if(this.selectedIndex===1){
      this.gar_largo = '1';
      this.gar_ancho = '1';
      this.gar_alto = '1';
    }
    if(this.selectedIndex===2){
      this.gar_largo = '2';
      this.gar_ancho = '2';
      this.gar_alto = '2';
    }
    if(this.selectedIndex===3){
      this.gar_largo = '3';
      this.gar_ancho = '3';
      this.gar_alto = '3';
    }

    this.router.navigate(['/eli-pref'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
        descripcion: this.descripcion,
        servicio: this.servicio,
        gar_largo: this.gar_largo,
        gar_ancho: this.gar_ancho,
        gar_alto: this.gar_alto,
        lat: this.lat,
        lng: this.lng,
      },
    });
  }

  return() {
    this.router.navigate(['/descripcion-de-servicios-adicionales'], {
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
        descripcion: this.descripcion,
        lat: this.lat,
        lng: this.lng,
      },
    });
  }

}
