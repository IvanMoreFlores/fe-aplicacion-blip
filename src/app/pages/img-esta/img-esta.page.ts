import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private storage: StorageService
  ) {
    this.setValues();
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
      console.log(this.uga_direcc);
    });
  }

  async sendImages() {
    //[routerLink]="['/cre-anu']"

    if (
      this.files &&
      this.files2 &&
      this.files3 &&
      this.tga_id != '' &&
      this.direccion != '' &&
      this.gar_largo != '' &&
      this.gar_ancho != '' &&
      this.gar_alto != '' &&
      this.uga_direcc != '' &&
      this.uga_lat != '' &&
      this.uga_long != '' &&
      this.servicio &&
      this.tve_id
    ) {

      console.log(this.files[0]);
      console.log(this.files2[0]);
      console.log(this.files3[0]);
      const token = await this.storage.getItem('token');
      this.api.createAdvertisement(token, this.files,
        this.files2,
        this.files3,
        this.tga_id,
        this.direccion,
        this.gar_largo,
        this.gar_ancho,
        this.gar_alto,
        this.uga_direcc,
        this.uga_lat,
        this.uga_long,
        this.distrito,
        this.servicio,
        this.tve_id).subscribe(
          async (response: any) => {
            console.log(response);
            if(response.status === "success"){
              this.router.navigate(['/cre-anu']);
            }else{
              alert('Hubo un error')
            }
          },
          (error: any) => {
            alert('Hubo un error: ' + error.message)
          }
        );
    } else {
      console.error('Datos incompletos.');
      console.log(this.files);
      console.log(this.files2);
      console.log(this.files3);
      console.log(this.tga_id);
      console.log(this.direccion); ///////
      console.log(this.gar_largo);
      console.log(this.gar_ancho);
      console.log(this.gar_alto);
      console.log(this.uga_direcc);
      console.log(this.uga_lat);
      console.log(this.uga_long);
      console.log(this.servicio);
      console.log(this.tve_id);
    }

  }
}

