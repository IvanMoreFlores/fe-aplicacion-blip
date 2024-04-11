import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importamos AlertController

@Component({
  selector: 'app-descripcion-del-mapa',
  templateUrl: './descripcion-del-mapa.page.html',
  styleUrls: ['./descripcion-del-mapa.page.scss'],
})
export class DescripcionDelMapaPage implements OnInit {

  constructor(private alertController: AlertController) { } // Inyectamos AlertController

  ngOnInit() {
  }

  // Método para mostrar alerta
  async mostrarAlerta(accion: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Estás seguro de que deseas ' + accion.toLowerCase() + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Operación cancelada');
          }
        }, {
          text: accion,
          cssClass: 'primary-alert-button', // Clase para cambiar el color del botón y del texto
          handler: () => {
            console.log('Operación realizada: ' + accion);
            // Aquí puedes agregar la lógica correspondiente a la acción
          }
        }
      ]
    });

    await alert.present();
  }
}
