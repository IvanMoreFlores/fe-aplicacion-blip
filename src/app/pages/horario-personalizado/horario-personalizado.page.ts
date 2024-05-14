import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-horario-personalizado',
  templateUrl: './horario-personalizado.page.html',
  styleUrls: ['./horario-personalizado.page.scss'],
})
export class HorarioPersonalizadoPage implements OnInit {

  constructor(private modalController: ModalController) {} // Inyecta el ModalController
  async exit() {
    
    await this.modalController.dismiss(null,'open-modal-elimnar-horario');
  }

  ngOnInit() {
  }

}
