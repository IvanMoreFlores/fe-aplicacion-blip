import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-reservas-reportar',
  templateUrl: './reservas-reportar.page.html',
  styleUrls: ['./reservas-reportar.page.scss'],
})
export class ReservasReportarPage implements OnInit {
  reporte: string = '';
  imagenCargada: string | null = null;

  constructor(
    private router: Router, // Inyecta el servicio de enrutamiento
    private actionSheetCtrl: ActionSheetController // Inyecta el controlador de ActionSheet
  ) {}

  // Simular la selección de una imagen
  async seleccionarImagen() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccionar Imagen',
      buttons: [
        {
          text: 'Tomar Foto',
          icon: 'camera-outline',
          handler: () => {
            this.cargarImagen(
              'https://via.placeholder.com/150' // Simula una imagen tomada con la cámara
            );
          },
        },
        {
          text: 'Elegir de la Galería',
          icon: 'image-outline',
          handler: () => {
            this.cargarImagen(
              'https://via.placeholder.com/150' // Simula una imagen de la galería
            );
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  cargarImagen(imagen: string) {
    this.imagenCargada = imagen;
  }

  enviarReporte() {
    if (!this.reporte || !this.imagenCargada) {
      alert('Por favor completa el reporte y adjunta una foto.');
      return;
    }

    // Mensaje opcional de confirmación
    alert('Reporte enviado correctamente.');

    // Navegar a la página de confirmación
    this.router.navigate(['/succes-report']);
  }

  ngOnInit() {
  }

}
