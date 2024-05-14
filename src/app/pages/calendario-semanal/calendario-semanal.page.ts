import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendario-semanal',
  templateUrl: './calendario-semanal.page.html',
  styleUrls: ['./calendario-semanal.page.scss'],
})
export class CalendarioSemanalPage implements OnInit {
  isNavbarOpen = false;
  mesesDelAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  mesActual: string = '';
  anioActual: number = 0;
  semanas2024: any[] = [];

  constructor( private modalController: ModalController) {} // Inyecta el ModalController
  async retu() {
    
    await this.modalController.dismiss(null,"open-modal-calend-sema");
  }
  ngOnInit() {
    const fechaActual = new Date();
    this.mesActual = this.mesesDelAnio[fechaActual.getMonth()]; // Obtener el nombre del mes actual
    this.anioActual = fechaActual.getFullYear(); // Obtener el año actual
    this.generarSemanas2024(); // Generar las semanas del año 2024
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  generarSemanas2024() {
    // Definir la fecha de inicio y fin del año 2024
    const inicio2024 = new Date('2024-01-01');
    const fin2024 = new Date('2024-12-31');

    // Iterar sobre las semanas del año 2024
    let fechaInicioSemana = inicio2024;
    while (fechaInicioSemana <= fin2024) {
      const diasSemana = [];
      for (let i = 0; i < 7; i++) {
        const diaSemana = this.obtenerDiaSemana(fechaInicioSemana);
        diasSemana.push({
          numero: fechaInicioSemana.getDate(),
          nombre: diaSemana
        });
        fechaInicioSemana.setDate(fechaInicioSemana.getDate() + 1); // Avanzar al siguiente día
      }
      this.semanas2024.push({
        dias: diasSemana
      });
    }
  }

  obtenerDiaSemana(fecha: Date): string {
    // Obtener el día de la semana como texto
    const diasSemana = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    return diasSemana[fecha.getDay()];
  }
}
