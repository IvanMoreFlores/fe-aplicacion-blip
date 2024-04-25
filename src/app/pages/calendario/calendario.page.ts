import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  isNavbarOpen = false;

  constructor() { }

  ngOnInit() {
    this.generarCalendario(2024, 2025); 
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Función para generar el calendario
  generarCalendario(startYear: number, endYear: number) {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    let html = '<div class="calendar-container">';

    for (let year = startYear; year <= endYear; year++) {
      meses.forEach((mes, index) => {
        html += `<h2>${mes} ${year}</h2>`;
        html += '<table>';
        html += '<tr><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th><th>Dom</th></tr>';

        const primerDiaMes = new Date(year, index, 9);
        const primerDiaSemana = primerDiaMes.getDay();
        const diasEnMes = new Date(year, index + 1, 0).getDate();

        let dia = 1;
        for (let i = 0; i < 6; i++) {
          html += '<tr>';

          for (let j = 0; j < 7; j++) {
            if (i === 0 && j < primerDiaSemana) {
              html += '<td></td>';
            } else if (dia > diasEnMes) {
              break;
            } else {
              html += `<td>${dia}</td>`;
              dia++;
            }
          }

          html += '</tr>';
        }

        html += '</table>';
      });
    }

    html += '</div>';

    // Inserta el calendario en el elemento con el ID 'calendar-año'
    const calendarContainer = document.getElementById('calendar-año');
    if (calendarContainer) {
      calendarContainer.innerHTML = html;
    } else {
      console.error('No se encontró el contenedor del calendario');
    }
  }
}
