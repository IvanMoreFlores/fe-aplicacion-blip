import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-anu-pone-alq',
  templateUrl: './nuevo-anu-pone-alq.page.html',
  styleUrls: ['./nuevo-anu-pone-alq.page.scss'],
})
export class NuevoAnuPoneAlqPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {

  }


  ionViewWillLeave() {
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss(null,'open-modal_nuevoanu');
  }
}
