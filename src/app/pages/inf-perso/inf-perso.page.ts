import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inf-perso',
  templateUrl: './inf-perso.page.html',
  styleUrls: ['./inf-perso.page.scss'],
})
export class InfPersoPage implements OnInit {
  textoGuardado: string = '';
  texto: string = '';
  textoGuardado2: string = '';
  texto2: string = '';
  textoGuardado3: string = '';
  texto3: string = '';
  textoGuardado4: string = '';
  texto4: string = '';
  isModalOpen = false;

  constructor(private modalController: ModalController) {} // Inyecta el ModalController

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async guardarCambios() {
    this.textoGuardado = this.texto;
    
    await this.modalController.dismiss();
  }

  async guardarCambios2() {
    this.textoGuardado2 = this.texto2;
    
    await this.modalController.dismiss();
  }

  async guardarCambios3() {
    this.textoGuardado3 = this.texto3;
    
    await this.modalController.dismiss();
  }

  async guardarCambios4() {
    this.textoGuardado4 = this.texto4;
    this.setOpen(false); // Cerrar el modal manualmente solo cuando sea necesario
    await this.modalController.dismiss();
  }

  ngOnInit() {}

}
