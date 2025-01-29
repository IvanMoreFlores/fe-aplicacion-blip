import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

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
  data: any;
  arr_pagos: any[] = [];

  constructor(
    private readonly modalController: ModalController,
    private readonly api: ApiService,
    private readonly storage: StorageService,
    private readonly cdRef: ChangeDetectorRef 
  ) {

  } // Inyecta el ModalController

  async retu() {
    await this.modalController.dismiss(null, "open-modal-calend-sema");
  }

  ngOnInit() {
    const fechaActual = new Date();
    this.mesActual = this.mesesDelAnio[fechaActual.getMonth()]; // Obtener el nombre del mes actual
    this.anioActual = fechaActual.getFullYear(); // Obtener el año actual
    // Generar las semanas del año 2024
    this.getReservas();
  }

  async getReservas() {
    const token = await this.storage.getItem('token');
    this.api.getCalendar(token).subscribe(
      async (response: any) => {
        this.data = response.data;
        console.log(this.data);
        this.generarSemanas2024();
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    )
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  async generarSemanas2024() {
    console.log('generar semanas');
    console.log(this.data);
    // Definir la fecha de inicio y fin del año 2024
    const inicio2024 = new Date();
    const fin2024 = new Date(inicio2024.getTime());
    fin2024.setDate(fin2024.getDate() + 30);
    // Iterar sobre las semanas del año 2024
    let fechaInicioSemana = inicio2024;
    while (fechaInicioSemana <= fin2024) {
      const diasSemana = [];
      for (let i = 0; i < 7; i++) {
        let total_dia = 0;
        let fecha_text = fechaInicioSemana.getDate().toString().padStart(2, '0') + '-' +
          (fechaInicioSemana.getMonth() + 1).toString().padStart(2, '0') + '-' +
          fechaInicioSemana.getFullYear();
        const diaSemana = this.obtenerDiaSemana(fechaInicioSemana);
        this.data.forEach((reserva: any) => {
          let fecha_base = new Date(reserva.res_fecini);
          let fecha_check = fecha_base.getDate().toString().padStart(2, '0') + '-' +
          (fecha_base.getMonth() + 1).toString().padStart(2, '0') + '-' +
          fecha_base.getFullYear();
          if (fecha_text === fecha_check) {
            console.log(fecha_text + ' = ' + fecha_check);
            total_dia += parseInt(reserva.monto_total);
          }
        });
        diasSemana.push({
          numero: fechaInicioSemana.getDate(),
          nombre: diaSemana,
          fecha: fecha_text,
          total_dia: total_dia
        });
        fechaInicioSemana.setDate(fechaInicioSemana.getDate() + 1); // Avanzar al siguiente día
      }
      this.semanas2024.push({
        dias: diasSemana
      });
    }
    
    console.log(this.semanas2024);
  
    // Forzamos la detección de cambios
    this.cdRef.detectChanges();
  }

  /**/

  async getMontos() {
    this.semanas2024.forEach((semana: any) => {
      if (semana && Array.isArray(semana.dias)) {  // Verifica si 'semana' y 'semana.dias' existen y son un array
        semana.dias.forEach((dia: any) => {
          const fecha = dia.fecha;
          let monto = 0;
          this.data.forEach((reserva: any) => {
            let fecha_base = new Date(reserva.res_fecini);
            let fecha_check = fecha_base.toLocaleDateString('es-ES', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            });
            if (fecha === fecha_check) {
              monto += reserva.monto_total;
            }
          });
          this.arr_pagos.push({
            fecha: fecha,
            monto: monto,
          });
        });
      }
    });
  }

  // Función para formatear la fecha en formato dd-MM-yyyy
  formatearFecha(fecha: string | Date): string {
    let nuevaFecha = new Date(fecha);
    let dia = nuevaFecha.getDate().toString().padStart(2, '0');
    let mes = (nuevaFecha.getMonth() + 1).toString().padStart(2, '0');
    let año = nuevaFecha.getFullYear().toString();

    return `${dia}-${mes}-${año}`;
  }

  // Función para comparar las fechas
  compararFechas(diaFecha: string, reservaFecha: string | Date): boolean {
    let fechaReservaFormateada = this.formatearFecha(reservaFecha);
    return diaFecha === fechaReservaFormateada;
  }

  convertirHora(fecha: string | Date): string {
    let nuevaFecha = new Date(fecha);
    return nuevaFecha.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  obtenerDiaSemana(fecha: Date): string {
    // Obtener el día de la semana como texto
    const diasSemana = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    return diasSemana[fecha.getDay()];
  }
}
