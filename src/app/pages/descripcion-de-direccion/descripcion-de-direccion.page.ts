import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-de-direccion',
  templateUrl: './descripcion-de-direccion.page.html',
  styleUrls: ['./descripcion-de-direccion.page.scss'],
})
export class DescripcionDeDireccionPage implements OnInit {
  distritoData:any;
  tga_id: string = '';
  distrito: string = '';
  ciudad: string = '';
  referencia: string = '';
  detalles: string = '';

  constructor(
    private router: Router,
    private storage: StorageService,
    private route: ActivatedRoute,

  ) { 
    this.setValues();
  }

  async setValues(){
    const adConfig = await this.storage.getItem('adConfig');
    this.distritoData = adConfig.districts;
    this.route.queryParams.subscribe(params => {
      this.tga_id = params['tga_id'];
    });
  }

  ngOnInit() {
  }

}
