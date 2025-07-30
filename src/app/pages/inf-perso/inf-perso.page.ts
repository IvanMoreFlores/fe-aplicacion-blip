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
  files: File[] = [];
  img_url: string = '';
  isValidIdn: boolean = false;

  constructor(
    private modalController: ModalController,
    private storage: StorageService,
    private api: ApiService
  ) {
    this.getUserData();
  }

  async getUserData() {
    this.userData = await this.storage.getItem('user');
    console.log(this.userData);

    this.nom = this.userData.usu_nombre;
    this.ape = this.userData.usu_apepat;
    this.telf = this.userData.usu_nrotel;
    this.email = this.userData.usu_correo;

    if (this.userData.photo) {
      this.img_url = this.userData.photo.url;
      console.log(this.img_url);
    }
    if (
      this.userData.esu_id &&
      this.userData.esu_id.esu_descri === 'VERIFICADO'
    ) {
      this.isValidIdn = true;
    } else {
      this.isValidIdn = false;
    }

    console.log('¿Identificación validada?', this.isValidIdn);
  }

  async updateData() {
    const token = await this.storage.getItem('token');
    this.api.getInformation(token).subscribe((response: any) => {
      this.data = response.data;
      this.storage.removeItem('user');
      this.storage.setItem('user', this.data);
    });
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async onSelect(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files = [event.addedFiles[0]];
      await this.sendUpdatePic(this.files[0]);
    }
  }

  async sendUpdatePic(file: File) {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    console.log(file);
    formData.append('photo', file);
    this.api.updateUser(token, formData).subscribe(
      async (response: any) => {
        console.log(response);
        this.img_url = response.data.photo.url;
        await this.updateData();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async guardarCambios() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_nombre', this.nom);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateData();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
    await this.modalController.dismiss();
  }

  async guardarCambios2() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_apepat', this.ape);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateData();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
    await this.modalController.dismiss();
  }

  async guardarCambios3() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_nrotel', this.telf);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateData();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
    await this.modalController.dismiss();
  }

  async guardarCambios4() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('usu_correo', this.email);
    this.api.updateUser(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateData();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
    await this.modalController.dismiss();
  }

  ngOnInit() {}
}
