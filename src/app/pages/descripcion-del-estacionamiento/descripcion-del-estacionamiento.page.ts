import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descripcion-del-estacionamiento',
  templateUrl: './descripcion-del-estacionamiento.page.html',
  styleUrls: ['./descripcion-del-estacionamiento.page.scss'],
})
export class DescripcionDelEstacionamientoPage implements OnInit {
  data: any;
  text: string = 'new';

  constructor(
    private modalController: ModalController,
    private storage: StorageService,
    private api: ApiService,
    private router: Router
  ) { }
  ngOnInit() {

  }


  ionViewWillLeave() {
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss(null, 'open-modal_nuevoanu');
  }




}
