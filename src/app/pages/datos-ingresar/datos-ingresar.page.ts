import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-datos-ingresar',
  templateUrl: './datos-ingresar.page.html',
  styleUrls: ['./datos-ingresar.page.scss'],
})
export class DatosIngresarPage implements OnInit {

  documentos: { key: string; value: string }[] = [
    { key: '1', value: 'DOCUMENTO NACIONAL DE IDENTIDAD' },
    { key: '2', value: 'REGISTRO ÚNICO DE CONTRIBUYENTE' },
    { key: '3', value: 'PASAPORTE' },
    { key: '4', value: 'PERMISO TEMPORAL DE PERMANENCIA' },
    { key: '5', value: 'CARNET DE EXTRANJERÍA' },
  ];
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';
  doc: string = 'dni';
  nro: string = '';
  documento: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setData();
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
  setData() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.fecha_nac = params['fecha_nac'];
      this.genero = params['genero'];
      this.email = params['email'];
    });
  }

  onDocumentoChange(selectedDocumento: { key: string; value: string }) {
    this.documento = selectedDocumento.key;
    console.log('Documento seleccionado:', selectedDocumento);
  }

  verify(){
    this.router.navigate(['/datos-numero'], {
      queryParams: {
        email: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero,
        documento: this.documento,
        nro: this.nro
      }
    });
  }
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

}
