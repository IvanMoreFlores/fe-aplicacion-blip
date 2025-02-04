import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-inputs-numeric',
  templateUrl: './dynamic-inputs-numeric.component.html',
  styleUrls: ['./dynamic-inputs-numeric.component.scss'],
})
export class DynamicInputsNumericComponent implements OnInit {
  @Input() numInputs: number = 4; // Número de inputs
  @Output() valoresChange = new EventEmitter<string[]>();

  inputs: string[] = []; // Inicializar los inputs
  valores: string[] = [];

  ngOnInit() {
    this.inputs = Array(this.numInputs).fill(''); // Inicializar los inputs con cadenas vacías
  }

  onInputChange(event: any, index: number) {
    const inputId = `input-${index}`; // Obtener el id dinámico
    const id: number = parseInt(inputId.split('-')[1], 10);
    this.valores[id] = event.target.value;

    console.log('ID del input:', inputId);
    console.log('Valores actuales del array:', this.valores);
    this.valoresChange.emit(this.valores);
  }
}
