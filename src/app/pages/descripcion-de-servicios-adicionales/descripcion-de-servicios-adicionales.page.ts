import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-de-servicios-adicionales',
  templateUrl: './descripcion-de-servicios-adicionales.page.html',
  styleUrls: ['./descripcion-de-servicios-adicionales.page.scss'],
})
export class DescripcionDeServiciosAdicionalesPage implements OnInit {
  isChecked: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;
  isChecked5: boolean = false;
  distritoData: any;
  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  serviciosSeleccionados: number[] = [];
  checkBox1: any;
  descripcion: string = '';
  lat: number = 0;
  lng: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setValues();
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  onChange(event: any) {
    this.isChecked = event.target.checked;
    console.log('Checkbox checked:', this.isChecked);
  }

  ngOnInit() {}

  async setValues() {
    this.route.queryParams.subscribe((params) => {
      this.tga_id = params['tga_id'];
      this.direccion = params['direccion'];
      this.distrito = params['distrito'];
      this.ciudad = params['ciudad'];
      this.referencia = params['referencia'];
      this.detalles = params['detalles'];
      this.descripcion = params['descripcion'];
      this.lat = params['lat'];
      this.lng = params['lng'];
    });
  }

  // Función para manejar los cambios en los checkboxes
  onCheckboxChange(servicioId: number, isChecked: boolean) {
    if (isChecked) {
      if (!this.serviciosSeleccionados.includes(servicioId)) {
        this.serviciosSeleccionados.push(servicioId);
      }
      console.log(this.serviciosSeleccionados);
    } else {
      console.log('unchecked');
      // Si está deseleccionado, remuévelo del array
      this.serviciosSeleccionados = this.serviciosSeleccionados.filter(
        (id) => id !== servicioId
      );
      console.log(this.serviciosSeleccionados);
    }
  }

  // Función para navegar y pasar los servicios seleccionados como query params
  getServicios() {
    if (
      !this.serviciosSeleccionados ||
      this.serviciosSeleccionados.length < 1
    ) {
      alert('Debes elegir una opcion.');
      return;
    }

    this.router.navigate(['/descripcion-de-medidas-del-espacio'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
        servicio: this.serviciosSeleccionados,
        descripcion: this.descripcion,
        lat: this.lat,
        lng: this.lng,
      },
    });
  }

  return() {
    this.router.navigate(['/descripcion-de-direccion'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
      },
    });
  }
  nextPage() {
    if (
      !this.serviciosSeleccionados ||
      this.serviciosSeleccionados.length < 1
    ) {
      alert('Debes elegir una opcion.');
      return;
    }
    this.router.navigate(['/descripcion-de-medidas-del-espacio'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
        descripcion: this.descripcion,
        servicio: this.serviciosSeleccionados,
        lat: this.lat,
        lng: this.lng,
      },
    });
  }
}
