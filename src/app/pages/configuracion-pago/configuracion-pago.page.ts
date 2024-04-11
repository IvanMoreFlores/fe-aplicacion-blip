import { Component, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-configuracion-pago',
  templateUrl: './configuracion-pago.page.html',
  styleUrls: ['./configuracion-pago.page.scss'],
})
export class ConfiguracionPagoPage implements OnInit {
  
  description: boolean = false;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    cargando(){
      this.description = true;
    }
  
  }
