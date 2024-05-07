import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu-config',
  templateUrl: './menu-config.page.html',
  styleUrls: ['./menu-config.page.scss'],
})
export class MENUCONFIGPage implements OnInit {
  switchValue: boolean = false; // Valor inicial del switch

  
  constructor(private modalController: ModalController, private cdr: ChangeDetectorRef) { }

  async dismissModal() {
    // Cerrar el modal
    await this.modalController.dismiss();
    
    // Revertir el valor del switch a false
    this.switchValue = false;

    // Actualizar la vista
    this.cdr.detectChanges();
  }
  ngOnInit() {
  }

}
