import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adj-dt-dni',
  templateUrl: './adj-dt-dni.page.html',
  styleUrls: ['./adj-dt-dni.page.scss'],
})
export class AdjDtDniPage implements OnInit {

  dniFront: string = '';
  dniBack: string = '';
  files: File[] = [];
  files2: File[] = []; // Para el segundo dropzone
  userData: any;
  data: any;

  constructor(
    private readonly api: ApiService,
    private readonly storage: StorageService,
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  onSelect(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files = [event.addedFiles[0]]; // Solo almacena el primer archivo
    }
  }

  onSelect2(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files2 = [event.addedFiles[0]]; // Solo almacena el primer archivo para el segundo dropzone
    }
  }

  onRemove(file: File) {
    const index = this.files.indexOf(file);
    if (index >= 0) {
      this.files.splice(index, 1);
    }
  }

  onRemove2(file: File) {
    const index = this.files2.indexOf(file);
    if (index >= 0) {
      this.files2.splice(index, 1);
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
          if (type === 'front') {
            this.dniFront = base64data;
          } else if (type === 'back') {
            this.dniBack = base64data;
          }
        };
      });
  }



  async sendImages() {
    //routerLink="/descripcion-del-estacionamiento"
    // Asegúrate de tener ambos base64 de imágenes antes de enviar

    if (this.files && this.files2) {
      console.log(this.files[0]);
      console.log(this.files2[0]);
      const token = await this.storage.getItem('token');  // Obtén tu token de autenticación correctamente
      this.api.sendDniFiles(token, this.files[0], this.files2[0]).subscribe(
        async (response) => {
          console.log('Imágenes enviadas exitosamente', response);
          await this.updateData();
          // Manejar la respuesta del servidor aquí
          this.router.navigate(['/tab-home/home']);
        },
        (error) => {
          console.error('Error al enviar las imágenes', error);
          // Manejar errores de la solicitud aquí
        }
      );
    } else {
      console.error('No se han capturado las imágenes necesarias.');
    }
  }

    async updateData() {
    const token = await this.storage.getItem('token');
    this.api.getInformation(token).subscribe(
      (response: any) => {
        this.data = response.data;
        this.storage.removeItem('user');
        this.storage.setItem('user', this.data);
      }
    )
  }

}

