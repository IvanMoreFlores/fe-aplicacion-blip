import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  buttonText: string = 'reenviar código';
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
  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
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
          this.buttonText = 'reenviar código';
          this.isExpired = true; // Marcar el botón como expirado
        }
      }
    }, 1000);
  }

  resetTimer() {
    this.minutes = 1;
    this.seconds = 0;
    this.buttonText = 'reenviar código';
    this.isExpired = false; // Restablecer el estado del botón
    this.startTimer(); // Reiniciar el temporizador
  }

}
