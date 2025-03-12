import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datos-registro',
  templateUrl: './datos-registro.page.html',
  styleUrls: ['./datos-registro.page.scss'],
})
export class DatosRegistroPage implements OnInit {
  generos: { key: string; value: string }[] = [
    { key: '1', value: 'Masculino' },
    { key: '2', value: 'Femenino' },
  ];
  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';
  classDate: string = 'secundary-input';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  onGeneroChange(selectedGenero: { key: string; value: string }) {
    this.genero = selectedGenero.key;
    console.log('Género seleccionado:', selectedGenero);
  }
  onFechaNacChange(newFechaNac: string) {
    this.fecha_nac = newFechaNac;
    this.classDate = 'primary-input';
    console.log('Fecha de Nacimiento seleccionada:', newFechaNac);
  }
  ngOnInit() {
    console.log('data-registro');
    this.initializeKeyboardListeners();
  }
  initializeKeyboardListeners() {
    const content = document.querySelector('ion-content') as HTMLElement;
    const footer = document.querySelector('.footer-btn') as HTMLElement;

    Keyboard.addListener('keyboardWillShow', (info) => {
      const footer = document.querySelector('.footer-btn') as HTMLElement;
      if (footer) {
        footer.style.bottom = `${info.keyboardHeight}px`; // Ajusta el espacio
      }
    });

    Keyboard.addListener('keyboardWillHide', () => {
      const footer = document.querySelector('.footer-btn') as HTMLElement;
      const content = document.querySelector('ion-content') as HTMLElement;

      if (footer) {
        footer.style.bottom = '0px'; // Restaura el footer
      }
      if (content) {
        content.style.paddingBottom = '0px'; // Restaura el padding
      }
    });
  }

  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }
  async getData() {
    this.router.navigate(['/cor-registro'], {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero,
      },
    });
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  verify() {
    if (
      this.nombre == '' ||
      this.apellido == '' ||
      this.fecha_nac == '' ||
      this.genero == ''
    ) {
      this.showToast('Todos los campos son obligatorios');
    } else {
      this.getData();
    }
  }
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
