import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.page.html',
  styleUrls: ['./terminos-y-condiciones.page.scss'],
})
export class TerminosYCondicionesPage implements OnInit {
  
  isChecked: boolean = false;
  constructor(private modalcontroller: ModalController ) { }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  dismissModal(){
    this.modalcontroller.dismiss(null,'back-log')
  }
  ngOnInit() {
  }

}
