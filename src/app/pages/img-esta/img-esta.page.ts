import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-img-esta',
  templateUrl: './img-esta.page.html',
  styleUrls: ['./img-esta.page.scss'],
})
export class ImgEstaPage implements OnInit {

  esta1: string = '';
  esta2: string = '';
  esta3: string = '';
  
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
        if (type === 'Aest1') {
          this.convertToBase64(image.webPath, 'Aest1');
        } else if (type === 'Aest2') {
          this.convertToBase64(image.webPath, 'Aest2');
        }else if(type === 'Aest3'){
          this.convertToBase64(image.webPath,'Aest3');
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
          } else if (type === 'Aest3'){
            this.esta3 = base64data;
          }
          
        };
      });
  }
 ngOnInit(){
  }

}
