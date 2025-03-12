import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agre-nuevo-vehiculo',
  templateUrl: './agre-nuevo-vehiculo.page.html',
  styleUrls: ['./agre-nuevo-vehiculo.page.scss'],
})
export class AgreNuevoVehiculoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async exit() {
    await this.modalController.dismiss(null,'open-modal-elimnar');
  }

}