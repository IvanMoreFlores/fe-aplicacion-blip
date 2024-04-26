import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Opción 1',
        handler: () => {
          console.log('Opción 1 seleccionada');
        }
      }, {
        text: 'Opción 2',
        handler: () => {
          console.log('Opción 2 seleccionada');
        }
      }, {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelado');
        }
      }]
    });
    await actionSheet.present();
  }

}


