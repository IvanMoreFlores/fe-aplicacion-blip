import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-termino-y-condiciones',
  templateUrl: './termino-y-condiciones.page.html',
  styleUrls: ['./termino-y-condiciones.page.scss'],
})
export class TerminoYCondicionesPage implements OnInit {
  
  isChecked: boolean = false;
  constructor(private modalController: ModalController,) { }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  async exit() {
    
    await this.modalController.dismiss();
  }
  ngOnInit() {
  }

}
