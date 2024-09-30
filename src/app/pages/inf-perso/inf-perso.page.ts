import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from 'src/app/services/api.service';

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
  data: any;
  userData: any;
  nom: string = '';
  ape: string = '';
  telf: string = '';
  email: string = '';

  constructor(
    private modalController: ModalController,
    private storage: StorageService,
    private api: ApiService
  ) {
    this.getUserData();
  } // Inyecta el ModalController

  async getUserData() {
    this.userData = await this.storage.getItem('user');
    console.log(this.userData);
    this.nom = this.userData.usu_nombre;
    this.ape = this.userData.usu_apepat;
    this.telf = this.userData.usu_nrotel;
    this.email = this.userData.usu_correo;
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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async guardarCambios() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_nombre', this.nom);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message)
      }
    )
    await this.modalController.dismiss();
  }

  async guardarCambios2() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_apepat', this.ape);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message)
      }
    )
    await this.modalController.dismiss();
  }

  async guardarCambios3() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_nrotel', this.telf);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message)
      }
    )
    await this.modalController.dismiss();
  }

  async guardarCambios4() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_correo', this.email);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message)
      }
    )
    await this.modalController.dismiss();
  }

  ngOnInit() { }

}
