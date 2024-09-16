import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-datos-ingresar',
  templateUrl: './datos-ingresar.page.html',
  styleUrls: ['./datos-ingresar.page.scss'],
})
export class DatosIngresarPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';
  doc: string = 'dni';
  nro: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.fecha_nac = params['fecha_nac'];
      this.genero = params['genero'];
    });
  }

  setDNI(){
    this.router.navigate(['/datos-numero'], {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero,
        doc: this.doc,
        nro: this.nro
      }
    });
  }

}
