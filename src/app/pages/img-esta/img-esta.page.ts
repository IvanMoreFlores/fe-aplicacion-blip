import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-img-esta',
  templateUrl: './img-esta.page.html',
  styleUrls: ['./img-esta.page.scss'],
})
export class ImgEstaPage implements OnInit {

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
  tve_id: string[] = [];
  files: File[] = [];
  files2: File[] = [];
  files3: File[] = [];
  esta1: string = '';
  esta2: string = '';
  esta3: string = '';
  descripcion: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private storage: StorageService
  ) {
    this.setValues();
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  onSelect(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files = [event.addedFiles[0]];
    }
  }

  onRemove(file: File) {
    const index = this.files.indexOf(file);
    if (index >= 0) {
      this.files.splice(index, 1);
    }
  }

  onSelect2(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files2 = [event.addedFiles[0]];
    }
  }

  onRemove2(file: File) {
    const index = this.files2.indexOf(file);
    if (index >= 0) {
      this.files2.splice(index, 1);
    }
  }

  onSelect3(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files3 = [event.addedFiles[0]];
    }
  }

  onRemove3(file: File) {
    const index = this.files2.indexOf(file);
    if (index >= 0) {
      this.files3.splice(index, 1);
    }
  }

  async captureImage(type: string) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      if (image.webPath) {
        if (type === 'front') {
          this.convertToBase64(image.webPath, 'front');
        } else if (type === 'back') {
          this.convertToBase64(image.webPath, 'back');
        }
      } else {
        console.error('No se ha podido obtener la ruta de la imagen.');
      }
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  convertToBase64(url: string, type: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result as string;
          if (type === 'Aest1') {
            this.esta1 = base64data;
          } else if (type === 'Aest2') {
            this.esta2 = base64data;
          } else if (type === 'Aest3') {
            this.esta3 = base64data;
          }

        };
      });
  }

  ngOnInit() {
  }

  setValues() {
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
      this.tve_id = params['tve_id'];
      this.descripcion = params['descripcion'];
      this.uga_lat='-11.992837133211326';
      this.uga_long='-77.00094774426941';
    });
  }

  generarCodigoAleatorio(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }

  async sendImages() {

    if (!this.files || this.files.length === 0) {
      alert('Debes incluir imagenes.');
      return;
    }

    if (!this.files2 || this.files2.length === 0) {
      alert('Debes incluir imagenes.');
      return;
    }

    if (!this.files3 || this.files3.length === 0) {
      alert('Debes incluir imagenes.');
      return;
    }

    //colocar validacion de img vacio

    let name = '';

    const token = await this.storage.getItem('token');

    const arr_dist = await this.storage.getItem('adConfig');

    arr_dist.districts.map((distrito: any) => {
      if (distrito.id_distrito.toString() === this.distrito) {
        name = 'Cochera ' + distrito.nombre_distrito + ' ' + this.generarCodigoAleatorio();
      }

    });

    console.log(name);
    console.log(this.files);
    console.log(this.files2);
    console.log(this.files3);
    console.log(this.tga_id);
    console.log(this.direccion);
    console.log(this.gar_largo);
    console.log(this.gar_ancho);
    console.log(this.gar_alto);
    console.log(this.uga_direcc);
    console.log(this.uga_lat);
    console.log(this.uga_long);
    console.log(this.servicio);
    console.log(this.tve_id);

    this.api.createAdvertisement(token,
      name,
      this.files,
      this.files2,
      this.files3,
      this.tga_id,
      this.descripcion,
      this.gar_largo,
      this.gar_ancho,
      this.gar_alto,
      this.direccion,
      this.uga_lat,
      this.uga_long,
      this.distrito,
      this.servicio,
      this.tve_id).subscribe(
        async (response: any) => {
          console.log(response);
          if (response.status === "success") {
            this.router.navigate(['/cre-anu']);
          } else {
            alert('Hubo un error')
          }
        },
        (error: any) => {
          alert('Hubo un error: ' + error.message)
        }
      );

  }

  return() {
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
        dis_id: this.dis_id,
        tve_id: this.tve_id
      }
    });
  }
}

