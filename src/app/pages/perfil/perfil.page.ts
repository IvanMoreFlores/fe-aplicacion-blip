// perfil.page.ts
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  constructor(private actionSheetController: ActionSheetController) {}

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cuéntanos algo curioso de ti',
      subHeader: 'Comparte con nosotros algún dato curioso que hayas vivido o sobre ti.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Texto aceptado');
          }
        }
      ],
      mode: 'md', // Establecer el modo en "md"
      // inputs: [
      //   {
      //     name: 'curiosidad',
      //     type: 'text',
      //     placeholder: 'Escribe aquí...'
      //   }
      // ]
    });
    
    await actionSheet.present();
  }
}
