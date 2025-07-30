import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

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
  tve_id: any = []; 
  descripcion: string = '';
  mainFiles: File[] = [];
  extraFiles: File[] = [];
  allPreviews: string[] = [];
showAddImageModal: boolean = false;
firstTimeAddingImage = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private storage: StorageService,
    private modalCtrl: ModalController
  ) {
    this.setValues();
  }

  ngOnInit() {}

  async selectCamera() {
    await this.captureImage(CameraSource.Camera);
    this.dismissOpenModal();
  }

  async selectGallery() {
    await this.captureImage(CameraSource.Photos);
    this.dismissOpenModal();
  }

  async dismissOpenModal() {
    const modal = await this.modalCtrl.getTop();
    if (modal) modal.dismiss();
  }

  async captureImage(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: source,
      });

      if (image.webPath) {
        this.addImageFromPath(image.webPath);
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  }

  addImageFromPath(url: string) {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], 'image.jpg', { type: blob.type });
        const reader = new FileReader();
        reader.onload = () => {
          this.allPreviews.push(reader.result as string);
          if (this.mainFiles.length < 3) {
            this.mainFiles.push(file);
          } else {
            this.extraFiles.push(file);
          }
        };
        reader.readAsDataURL(file);
      });
  }

  removeImage(index: number) {
    if (index < 3) {
      this.mainFiles.splice(index, 1);
    } else {
      this.extraFiles.splice(index - 3, 1);
    }
    this.allPreviews.splice(index, 1);
  }

  async sendImages() {
    if (this.mainFiles.length < 3) {
      alert('Debes incluir al menos tres imágenes principales.');
      return;
    }

    const token = await this.storage.getItem('token');
    const arr_dist = await this.storage.getItem('adConfig');
    let name = '';

    arr_dist.districts.forEach((distrito: any) => {
      if (distrito.id_distrito.toString() === this.distrito) {
        name =
          'Cochera ' +
          distrito.nombre_distrito +
          ' ' +
          this.generarCodigoAleatorio();
      }
    });

    console.log('Datos a enviar:');
    console.log('name:', name);
    console.log('tga_id:', this.tga_id);
    console.log('descripcion:', this.descripcion);
    console.log('gar_largo:', this.gar_largo);
    console.log('gar_ancho:', this.gar_ancho);
    console.log('gar_alto:', this.gar_alto);
    console.log('direccion:', this.direccion);
    console.log('latitud:', this.uga_lat);
    console.log('longitud:', this.uga_long);
    console.log('distrito:', this.distrito);
    console.log('servicios:', this.servicio);
    console.log('tve_id:', this.tve_id);
    console.log('Files:', this.mainFiles);

    this.api
      .createAdvertisement(
        token,
        name,
        this.mainFiles,
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
      )
      .subscribe(
        async (response: any) => {
          if (response.status === 'success') {
            this.router.navigate(['/cre-anu']);
          } else {
            alert('Hubo un error al crear el anuncio');
          }
        },
        (error: any) => {
          alert('Error al crear el anuncio: ' + error.message);
        }
      );
  }

  generarCodigoAleatorio(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }

  setValues() {
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
      this.uga_direcc = params['uga_direcc'];
      this.uga_lat = params['lat'] || params['uga_lat'];
      this.uga_long = params['lng'] || params['uga_long'];
      this.dis_id = params['dis_id'];
      this.tve_id = params['tve_id'];
      this.descripcion = params['descripcion'];
    });
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
        tve_id: this.tve_id,
      },
    });
  }
  onAddImageClick() {
  if (this.firstTimeAddingImage) {
    this.showAddImageModal = true;
    this.firstTimeAddingImage = false;
  } else {
    // Ya mostró el modal antes, va directo a galería
    this.selectGallery();
  }
}

}
