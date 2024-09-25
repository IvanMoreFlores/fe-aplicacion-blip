import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-anu-pone-alq',
  templateUrl: './nuevo-anu-pone-alq.page.html',
  styleUrls: ['./nuevo-anu-pone-alq.page.scss'],
})
export class NuevoAnuPoneAlqPage implements OnInit {
  userData: any;

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
