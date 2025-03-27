import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-de-direccion',
  templateUrl: './descripcion-de-direccion.page.html',
  styleUrls: ['./descripcion-de-direccion.page.scss'],
})
export class DescripcionDeDireccionPage implements OnInit {
  distritoData: any;
  tga_id: string = '';
  direccion: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';
  ciudades: { key: string; value: string }[] = [{ key: '1', value: 'Lima' }];
  distritos: { key: string; value: string }[] = [];

  constructor(
    private router: Router,
    private storage: StorageService,
    private route: ActivatedRoute
  ) {}
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  ngOnInit() {
    this.setValues();
  }

  async setValues() {
    const adConfig = await this.storage.getItem('adConfig');
    this.distritoData = adConfig.districts;
    for (const item of this.distritoData) {
      this.distritos.push({ key: item.id_distrito.toString(), value: item.nombre_distrito });
    }
    this.route.queryParams.subscribe((params) => {
      this.tga_id = params['tga_id'];
    });
  }

  nextMap(){
    this.router.navigate(['/descripcion-del-mapa'], {
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
    if (!this.direccion || this.direccion.length < 1) {
      alert('Debes incluir una direccion.');
      return;
    }

    if (!this.ciudad || this.ciudad.length < 1) {
      alert('Debes incluir una ciudad.');
      return;
    }

    if (!this.distrito || this.distrito.length < 1) {
      alert('Debes incluir una ciudad.');
      return;
    }

    this.router.navigate(['/app-descripcion-espacio'], {
      queryParams: {
        tga_id: this.tga_id,
        direccion: this.direccion,
        distrito: this.distrito,
        ciudad: this.ciudad,
        referencia: this.referencia,
        detalles: this.detalles,
      },
    });

    // this.router.navigate(['/descripcion-de-servicios-adicionales'], {
    //   queryParams: {
    //     tga_id: this.tga_id,
    //     direccion: this.direccion,
    //     distrito: this.distrito,
    //     ciudad: this.ciudad,
    //     referencia: this.referencia,
    //     detalles: this.detalles,
    //   },
    // });
  }

  async return() {
    this.router.navigate(['/descripcion-del-espacio'], {
      queryParams: {
        tga_id: this.tga_id,
      },
    });
  }

  onCiudadChange(selectedCiudad: { key: string; value: string }) {
    this.ciudad = selectedCiudad.key;
    console.log('Ciudad seleccionado:', selectedCiudad);
  }

  onDistritoChange(selectedDistrito: { key: string; value: string }) {
    this.distrito = selectedDistrito.key;
    console.log('Distrito seleccionado:', selectedDistrito);
  }
}
