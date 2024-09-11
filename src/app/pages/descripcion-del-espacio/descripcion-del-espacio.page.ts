import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-descripcion-del-espacio',
  templateUrl: './descripcion-del-espacio.page.html',
  styleUrls: ['./descripcion-del-espacio.page.scss'],
})
export class DescripcionDelEspacioPage {

  @ViewChildren('customBtn') customBtns!: QueryList<ElementRef>;
  selectedIndex: number | null = null; // Inicialmente ningún botón seleccionado

  constructor() { }

  onRadioChange(selectedIndex: number) {
    this.selectedIndex = selectedIndex; // Actualiza el índice seleccionado
    this.customBtns.forEach((btn, index) => {
      if (index === selectedIndex) {
        btn.nativeElement.classList.add('custom-btn-selected'); // Añade la clase seleccionada
      } else {
        btn.nativeElement.classList.remove('custom-btn-selected'); // Elimina la clase de los otros botones
      }
    });
  }
}
