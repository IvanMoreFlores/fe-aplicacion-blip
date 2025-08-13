import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-contra-verf',
  templateUrl: './contra-verf.page.html',
  styleUrls: ['./contra-verf.page.scss'],
})
export class ContraVerfPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }


  ngOnInit() {
    this.startRedirection();
  }

  // Método para redirigir tras 2 segundos
  private startRedirection() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login');
    }, 2000);
  }

}
