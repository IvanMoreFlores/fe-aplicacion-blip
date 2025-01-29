import { Component, OnInit,OnDestroy, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-recu-cuen',
  templateUrl: './recu-cuen.page.html',
  styleUrls: ['./recu-cuen.page.scss'],
})
export class RecuCuenPage implements OnInit,OnDestroy {
  displayedText: string = '';
  buttonText: string = '  reenviar código por SMS';
  minutes: number = 1;
  seconds: number = 0;
  interval: any;
  isExpired: boolean = false;
  // public toastButtons = [
  //   {
  //     text: 'Dismiss', FUNCION PARA LOS BOTONES 
  //     role: 'cancel',
  //   },
  // ];
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  inputsFilled: boolean = false;

  checkInputs() {
    this.inputsFilled = this.input1 && this.input2 && this.input3 && this.input4 ? true : false;
  }


  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  async reenviarCodigo() {
    if (this.isExpired) {
      this.resetTimer();
    }
  }


  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          clearInterval(this.interval);
          this.interval = null;
          this.buttonText = 'reenviar código por SMS';
          this.isExpired = true; // Marcar el botón como expirado
        }
      }
    }, 1000);
  }

  resetTimer() {
    this.minutes = 1;
    this.seconds = 0;
    this.buttonText = 'reenviar código por SMS';
    this.isExpired = false; // Restablecer el estado del botón
    this.startTimer(); // Reiniciar el temporizador
  }
  constructor(private route: ActivatedRoute,private modalcontroller: ModalController,) {}
  dismissModal() {
    this.modalcontroller.dismiss(null, 'mas-opc')
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
    this.route.queryParams.subscribe(params => {
      this.displayedText = params['text'];
    });
    this.startTimer();
    this.initializeKeyboardListeners();
  }
}
