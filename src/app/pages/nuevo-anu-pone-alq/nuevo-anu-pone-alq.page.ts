import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-anu-pone-alq',
  templateUrl: './nuevo-anu-pone-alq.page.html',
  styleUrls: ['./nuevo-anu-pone-alq.page.scss'],
})
export class NuevoAnuPoneAlqPage implements OnInit {
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }

  accionBoton1() {
    // Lógica para el botón 1
    console.log('Botón 1 presionado');
  }

  accionBoton2() {
    // Lógica para el botón 2
    console.log('Botón 2 presionado');
  }
  constructor() { }

  ngOnInit() {
  }

}
