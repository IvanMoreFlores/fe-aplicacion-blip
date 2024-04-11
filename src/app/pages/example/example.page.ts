import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
})
export class ExamplePage implements OnInit {
  horaInicio: string=''; // Variable para almacenar la hora de inicio del día
  horaSalida: string=''; // Variable para almacenar la hora de salida del día
  constructor() { }

  ngOnInit() {
  }

}
