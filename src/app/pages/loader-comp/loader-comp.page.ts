import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-loader-comp',
  templateUrl: './loader-comp.page.html',
  styleUrls: ['./loader-comp.page.scss'],
})
export class LoaderCompPage implements OnInit, OnDestroy {
  private redirectTimeout: any;
  url_new: string = '/nuevo-anu-pone-alq';
  userData: any;

  constructor(
    private readonly router: Router,
    private readonly storage: StorageService
  ) { }

  ngOnInit(): void {
    if (!this.redirectTimeout) {
      this.startRedirectTimer();
    }
    this.getDni();
  }

  ngOnDestroy(): void {
    this.clearRedirectTimer();
  }

  async getUserData() {
    this.userData = await this.storage.getItem('user');
  }

  async getDni() {
    const userDni = await this.storage.getItem('userDni');
    if (userDni) {
      this.url_new = '/descripcion-del-espacio';
    }
    this.getUserData();
    if (this.userData.esu_id.esu_descri !== 'REGISTRADO') {
      this.url_new = '/descripcion-del-espacio';
    }
  }

  startRedirectTimer(): void {
    this.clearRedirectTimer(); // Asegúrate de que no haya un temporizador previo
    this.redirectTimeout = setTimeout(() => {
      this.router.navigate([this.url_new]);
    }, 1000);
  }

  clearRedirectTimer(): void {
    if (this.redirectTimeout) {
      clearTimeout(this.redirectTimeout);
      this.redirectTimeout = null;
    }
  }
}
