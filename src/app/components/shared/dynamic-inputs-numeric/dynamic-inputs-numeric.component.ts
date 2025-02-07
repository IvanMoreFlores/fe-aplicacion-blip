import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-inputs-numeric',
  templateUrl: './dynamic-inputs-numeric.component.html',
  styleUrls: ['./dynamic-inputs-numeric.component.scss'],
})
export class DynamicInputsNumericComponent implements OnInit, AfterViewInit {
  @Input() numInputs: number = 4; // Número de inputs
  @Output() valoresChange = new EventEmitter<string[]>();

  @ViewChildren('input') inputsRef!: QueryList<ElementRef>;

  inputs: string[] = []; // Inicializar los inputs
  valores: string[] = [];

  ngOnInit() {
    this.inputs = Array(this.numInputs).fill(''); // Inicializar los inputs con cadenas vacías
  }

  ionViewWillEnter() {
    this.resetInputs();
  }

  resetInputs() {
    this.inputs = Array(this.numInputs).fill(''); // Restablecer los inputs con cadenas vacías
    this.valores = Array(this.numInputs).fill(''); // Restablecer los valores con cadenas vacías
    this.inputsRef.forEach((input) => {
      (input.nativeElement as HTMLInputElement).value = ''; // Limpiar el valor del ion-input
    });
    this.valoresChange.emit(this.valores); // Emitir los valores vacíos
  }

  ngAfterViewInit() {
    console.log('Lista de inputs inicializados:', this.inputsRef.toArray());
  }

  onInputChange(event: any, index: number) {
    const inputId = `input-${index}`; // Obtener el id dinámico
    const id: number = parseInt(inputId.split('-')[1], 10);
    this.valores[id] = event.target.value;

    console.log('ID del input:', inputId);
    console.log('Valores actuales del array:', this.valores);
    this.valoresChange.emit(this.valores);
  }

  onKeyUp(event: KeyboardEvent, index: number) {
    console.log('🚀 ~ DynamicInputsNumericComponent ~ onKeyUp ~ event:', event);
    console.log('🚀 ~ DynamicInputsNumericComponent ~ onKeyUp ~ index:', index);

    const nextInputId = `input-${index + 1}`; // Construir el ID del siguiente input
    const nextInputElement = document.getElementById(
      nextInputId
    ) as HTMLIonInputElement;

    if (nextInputElement) {
      nextInputElement.setFocus(); // Método de Ionic para enfocar ion-input
    } else {
      console.log('No next input found or it is the last input.');
    }
  }
}
