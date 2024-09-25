import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion-de-servicios-adicionales',
  templateUrl: './descripcion-de-servicios-adicionales.page.html',
  styleUrls: ['./descripcion-de-servicios-adicionales.page.scss'],
})
export class DescripcionDeServiciosAdicionalesPage implements OnInit {
  isChecked: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;
  isChecked5: boolean = false;
  onChange(event: any) {
    this.isChecked = event.target.checked;
    console.log('Checkbox checked:', this.isChecked);
  }
  constructor() { }

  ngOnInit() {
  }

}
