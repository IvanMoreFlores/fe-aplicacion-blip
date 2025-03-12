import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reservas-detalles',
  templateUrl: './reservas-detalles.page.html',
  styleUrls: ['./reservas-detalles.page.scss'],
})
export class ReservasDetallesPage {
  calificacion: number = 0;
  mostrarBotonesOpinion: boolean = false;
  omar: boolean = false;


  @ViewChild('estrellas', { static: false }) estrellas!: ElementRef;

  constructor(private modalController: ModalController) {}

  calificar(calificacion: number) {
    this.calificacion = calificacion;
    
    this.mostrarBotonesOpinion = calificacion === 5; // Mostrar botones solo si la calificación es 5
    this.omar = calificacion ===3;
    this.actualizarEstrellas();
  }

  actualizarEstrellas() {
    if (!this.estrellas) {
      return;
    }
    const estrellasArray = this.estrellas.nativeElement.querySelectorAll('i');
    estrellasArray.forEach((estrella: HTMLElement, index: number) => {
      if (index < this.calificacion) {
        estrella.classList.add('bi-star-fill'); 
        estrella.classList.remove('bi-star'); 
      } else {
        estrella.classList.remove('bi-star-fill'); 
        estrella.classList.add('bi-star'); 
      }
    });
  }

  seleccionarOpinion(opinion: string) {
    console.log(`Opinión seleccionada: ${opinion}`);
    // Aquí puedes agregar la lógica que necesites para manejar la selección de la opinión
  }

  async guardarCalificacion() {
    console.log('Calificación guardada:', this.calificacion);
    await this.modalController.dismiss();
  }
}
