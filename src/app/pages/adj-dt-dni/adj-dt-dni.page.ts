import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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
  constructor(private navCtrl: NavController) {}

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

  ngOnInit() {}

}

