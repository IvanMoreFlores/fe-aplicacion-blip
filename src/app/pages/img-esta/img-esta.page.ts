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
  descripcion: string = '';
  files: File[] = [];
  files2: File[] = [];
  files3: File[] = [];
  esta1: string = '';
  esta2: string = '';
  esta3: string = '';
  extraFiles: File[] = [];
  extraPreviews: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private storage: StorageService
  ) {
    this.setValues();
  }

  ngOnInit() {}

  handleNavigateTo(route: string) {
    if (route) this.router.navigate([route]);
  }

  onSelect(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files = [event.addedFiles[0]];
      this.generatePreview(this.files[0], 'Aest1');
    }
  }
  onSelect2(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files2 = [event.addedFiles[0]];
      this.generatePreview(this.files2[0], 'Aest2');
    }
  }
  onSelect3(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files3 = [event.addedFiles[0]];
      this.generatePreview(this.files3[0], 'Aest3');
    }
  }
  onSelectExtra(event: { addedFiles: File[] }) {
    for (const file of event.addedFiles) {
      this.extraFiles.push(file);
      this.generateExtraPreview(file);
    }
  }

  onRemove(file: File) {
    const index = this.files.indexOf(file);
    if (index >= 0) {
      this.files.splice(index, 1);
      this.esta1 = '';
    }
  }
  onRemove2(file: File) {
    const index = this.files2.indexOf(file);
    if (index >= 0) {
      this.files2.splice(index, 1);
      this.esta2 = '';
    }
  }
  onRemove3(file: File) {
    const index = this.files3.indexOf(file);
    if (index >= 0) {
      this.files3.splice(index, 1);
      this.esta3 = '';
    }
  }
  onRemoveExtra(index: number) {
    this.extraFiles.splice(index, 1);
    this.extraPreviews.splice(index, 1);
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
        this.convertToBase64(image.webPath, type);
      } else {
        console.error('No se ha podido obtener la ruta de la imagen.');
      }
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }
  async captureExtraImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      if (image.webPath) {
        this.convertExtraToBase64(image.webPath);
      }
    } catch (error) {
      console.error('Error al capturar imagen adicional:', error);
    }
  }

  convertToBase64(url: string, type: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'camera.jpg', { type: blob.type });
        if (type === 'Aest1') {
          this.files = [file];
        } else if (type === 'Aest2') {
          this.files2 = [file];
        } else if (type === 'Aest3') {
          this.files3 = [file];
        }
        this.generatePreview(file, type);
      });
  }
  convertExtraToBase64(url: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'camera-extra.jpg', { type: blob.type });
        this.extraFiles.push(file);
        this.generateExtraPreview(file);
      });
  }

  generatePreview(file: File, type: string) {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'Aest1') this.esta1 = reader.result as string;
      if (type === 'Aest2') this.esta2 = reader.result as string;
      if (type === 'Aest3') this.esta3 = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  generateExtraPreview(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.extraPreviews.push(reader.result as string);
    };
    reader.readAsDataURL(file);
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
      this.uga_lat = params['lat'] || params['uga_lat'];
      this.uga_long = params['lng'] || params['uga_long'];
      this.dis_id = params['dis_id'];
      this.tve_id = params['tve_id'];
      this.descripcion = params['descripcion'];
    });
  }

  generarCodigoAleatorio(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }
  async sendImages() {
    if (!this.files.length || !this.files2.length || !this.files3.length) {
      alert('Debes incluir las tres imágenes principales.');
      return;
    }
    const token = await this.storage.getItem('token');
    const arr_dist = await this.storage.getItem('adConfig');

    let name = '';
    arr_dist.districts.forEach((distrito: any) => {
      if (distrito.id_distrito.toString() === this.distrito) {
        name = 'Cochera ' + distrito.nombre_distrito + ' ' + this.generarCodigoAleatorio();
      }
    });

    this.api.createAdvertisement(
      token,
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
      this.tve_id
    ).subscribe(
      async (response: any) => {
        if (response.status === 'success') {
          this.router.navigate(['/cre-anu']);
        } else {
          alert('Hubo un error');
        }
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
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
