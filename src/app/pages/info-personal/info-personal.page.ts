import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.page.html',
  styleUrls: ['./info-personal.page.scss'],
})
export class InfoPersonalPage implements OnInit {
  // Variables para textos
  textoGuardado: string = '';
  texto: string = '';
  textoGuardado2: string = '';
  texto2: string = '';
  textoGuardado3: string = '';
  texto3: string = '';

  // Variables para las imágenes cargadas
  profileImage: string | null = null; // Imagen de perfil
  backImage: string | null = null; // Imagen secundaria o trasera

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  // Métodos para guardar cambios de texto
  async guardarCambios() {
    this.textoGuardado = this.texto;
    await this.modalController.dismiss(null, 'edit-nom');
  }

  async guardarCambios2() {
    this.textoGuardado2 = this.texto2;
    await this.modalController.dismiss(null, 'edit-nom2');
  }

  async guardarCambios3() {
    this.textoGuardado3 = this.texto3;
    await this.modalController.dismiss(null, 'edit-nom3');
  }

  // Métodos para manejar ngx-dropzone
  onSelectFront(event: any) {
    const file = event.addedFiles[0]; // Selecciona el primer archivo
    this.convertFileToBase64(file).then((dataUrl: string) => {
      this.profileImage = dataUrl; // Guarda la imagen convertida
    });
  }

  onSelectBack(event: any) {
    const file = event.addedFiles[0]; // Selecciona el primer archivo
    this.convertFileToBase64(file).then((dataUrl: string) => {
      this.backImage = dataUrl; // Guarda la imagen convertida
    });
  }

  // Método para convertir un archivo a Base64
  async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Lee el archivo como Data URL
      reader.onload = () => resolve(reader.result as string); // Retorna el resultado
      reader.onerror = (error) => reject(error); // Maneja errores
    });
  }
  async dismissModal() {
    await this.modalController.dismiss();
  }

  // Método para guardar cambios relacionados con las imágenes
  async guardarImagenes() {
    if (this.profileImage || this.backImage) {
      console.log('Imágenes guardadas:', {
        ImagenDePerfil: this.profileImage,
        ImagenSecundaria: this.backImage,
      });
    }
  }
}
