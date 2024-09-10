import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-registro',
  templateUrl: './datos-registro.page.html',
  styleUrls: ['./datos-registro.page.scss'],
})
export class DatosRegistroPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';

  constructor(private router: Router,) { }

  ngOnInit() {
    console.log('data-registro')
  }

  async getData() {
    this.router.navigate(['/datos-ingresar'], {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero
      }
    });
  }

}
