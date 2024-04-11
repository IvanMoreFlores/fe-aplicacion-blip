import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inf-perso',
  templateUrl: './inf-perso.page.html',
  styleUrls: ['./inf-perso.page.scss'],
})
  
export class InfPersoPage implements OnInit {
  showContent: boolean = false;
  textoGuardado: string = '';
  texto: string = '';
  textoGuardado2: string = '';
  showContent2: boolean = false;
  texto2: string = '';
  textoGuardado3: string = '';
  showContent3: boolean = false;
  texto3: string = '';
  textoGuardado4: string = '';
  showContent4: boolean = false;
  texto4: string = '';
  isChecked: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  constructor() {}

  toggleContent() {
    this.showContent = !this.showContent;
  }
  guardarCambio() {
    this.textoGuardado = this.texto;
    this.showContent = false;
    this.texto = '';
  }
  toggleContent2() {
      this.showContent2 = !this.showContent2;
    }
  guardarCambio2() {
      this.textoGuardado2 = this.texto2;
      this.showContent2 = false;
      this.texto2 = '';
  }
  toggleContent3() {
    this.showContent3 = !this.showContent3;
  }
   guardarCambio3() {
    this.textoGuardado3 = this.texto3;
    this.showContent3 = false;
    this.texto3 = '';
  }

  toggleContent4() {
    this.showContent4 = !this.showContent4;
  }
   guardarCambio4() {
    this.textoGuardado4 = this.texto4;
    this.showContent4 = false;
    this.texto4 = '';
  }
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  toggleCheckbox2() {
    this.isChecked2 = !this.isChecked2;
  }
  toggleCheckbox3() {
    this.isChecked3 = !this.isChecked3;
  }
  cancelar() {
    // Puedes restablecer cualquier estado necesario aquí, por ejemplo:
   // Restablecer el texto ingresado
    this.showContent4 = false; // Ocultar el contenido
  }
  
  ngOnInit() {
  }
}
  
  
