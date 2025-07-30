import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  files2: File[] = []; // Para el reverso del DNI
  userData: any;
  data: any;

  // previews para mostrar las imágenes seleccionadas
  allPreviewsFront: string[] = [];
  allPreviewsBack: string[] = [];

  @ViewChild('frontInput') frontInput!: ElementRef<HTMLInputElement>;
  @ViewChild('backInput') backInput!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly api: ApiService,
    private readonly storage: StorageService,
    private readonly router: Router,
  ) {}

  ngOnInit() {}

  // Métodos para abrir los inputs ocultos
  onAddFrontClick() {
    this.frontInput.nativeElement.click();
  }

  onAddBackClick() {
    this.backInput.nativeElement.click();
  }

  // Maneja la selección de archivo desde el input
  onFileSelected(event: Event, type: 'front' | 'back') {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'front') {
        this.allPreviewsFront = [reader.result as string];
        this.files = [file]; // para enviar al backend
      } else {
        this.allPreviewsBack = [reader.result as string];
        this.files2 = [file];
      }
    };
    reader.readAsDataURL(file);
    input.value = '';
  }

  // Elimina imagen de la vista y de los arrays
  removeImage(type: 'front' | 'back') {
    if (type === 'front') {
      this.allPreviewsFront = [];
      this.files = [];
    } else {
      this.allPreviewsBack = [];
      this.files2 = [];
    }
  }

  // Métodos existentes (captura con cámara y envío)
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

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  async sendImages() {
    if (this.files.length && this.files2.length) {
      console.log(this.files[0]);
      console.log(this.files2[0]);
      const token = await this.storage.getItem('token');
      this.api.sendDniFiles(token, this.files[0], this.files2[0]).subscribe(
        async (response) => {
          console.log('Imágenes enviadas exitosamente', response);
          await this.updateData();
          this.router.navigate(['/tab-home/home']);
        },
        (error) => {
          console.error('Error al enviar las imágenes', error);
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
