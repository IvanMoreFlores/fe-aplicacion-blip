import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-registro', // Selector del componente
  templateUrl: './registro.page.html', // Archivo HTML asociado al componente
  styleUrls: ['./registro.page.scss'], // Archivo CSS asociado al componente
})
export class RegistroPage implements OnInit, OnDestroy {
  // Declaración de variables de clase
  buttonText: string = 'Reenviar código'; // Texto del botón de reenvío
  minutes: number = 1; // Minutos restantes en el temporizador
  seconds: number = 0; // Segundos restantes en el temporizador
  interval: any; // Variable para almacenar el intervalo del temporizador
  isExpired: boolean = false; // Indicador de si el temporizador ha expirado
  input1: string = ''; // Primer dígito del código de verificación
  input2: string = ''; // Segundo dígito del código de verificación
  input3: string = ''; // Tercer dígito del código de verificación
  input4: string = ''; // Cuarto dígito del código de verificación
  inputsFilled: boolean = false; // Indicador de si todos los campos del código están llenos

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.startTimer(); // Inicia el temporizador al cargar la página
  }

  // Método que se ejecuta al destruir el componente
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval); // Limpia el intervalo del temporizador si existe
    }
  }

  // Método para verificar si todos los campos del código están llenos
  checkInputs() {
    this.inputsFilled = this.input1 && this.input2 && this.input3 && this.input4 ? true : false;
  }

  // Método asincrónico para reenviar el código de verificación
  async reenviarCodigo() {
    if (this.isExpired) { // Si el temporizador ha expirado
      this.resetTimer(); // Reinicia el temporizador
    }
  }

  // Método para iniciar el temporizador
  startTimer() {
    this.interval = setInterval(() => { // Utiliza setInterval para ejecutar una función cada segundo
      if (this.seconds > 0) { // Si quedan segundos
        this.seconds--; // Decrementa los segundos
      } else {
        if (this.minutes > 0) { // Si quedan minutos y no segundos
          this.minutes--; // Decrementa los minutos
          this.seconds = 59; // Establece los segundos a 59
        } else {
          clearInterval(this.interval); // Limpia el intervalo del temporizador
          this.interval = null; // Establece el intervalo a null
          this.buttonText = 'Reenviar código'; // Restablece el texto del botón
          this.isExpired = true; // Marca el temporizador como expirado
        }
      }
    }, 1000); // Intervalo de 1000 milisegundos (1 segundo)
  }

  // Método para reiniciar el temporizador
  resetTimer() {
    this.minutes = 1; // Reinicia los minutos a 1
    this.seconds = 0; // Reinicia los segundos a 0
    this.buttonText = 'Reenviar código'; // Restablece el texto del botón
    this.isExpired = false; // Restablece el indicador de temporizador expirado
    this.startTimer(); // Reinicia el temporizador
  }
}
