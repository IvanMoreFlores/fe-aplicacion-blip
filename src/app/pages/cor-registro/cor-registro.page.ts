import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-cor-registro',
  templateUrl: './cor-registro.page.html',
  styleUrls: ['./cor-registro.page.scss'],
})
export class CorRegistroPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';
  email: string = '';
  isEmailValid: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onEmailChange(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email.trim());
  }
  goToDisplayPage() {
    this.router.navigate(['/datos-ingresar'], {
      queryParams: {
        email: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero,
      },
    });
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
  ngOnInit() {
    this.initializeKeyboardListeners();
    this.route.queryParams.subscribe((params) => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.fecha_nac = params['fecha_nac'];
      this.genero = params['genero'];
    });
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
