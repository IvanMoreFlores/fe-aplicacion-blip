import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-mes',
  templateUrl: './calendario-mes.page.html',
  styleUrls: ['./calendario-mes.page.scss'],
})
export class CalendarioMesPage implements OnInit {
  isNavbarOpen = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.generarCalendario(2024, 2025); 
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Función para generar el calendario
  generarCalendario(startYear: number, endYear: number) {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    let html = '<div class="calendar-container">';
  
    for (let year = startYear; year <= endYear; year++) {
      meses.forEach((mes, index) => {
        html += `<h2>${mes} ${year}</h2>`;
        html += '<table>';
        html += '<tr><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th><th>Dom</th></tr>';
    
        const primerDiaMes = new Date(year, index, 1);
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
              html += `<td data-date="${year}-${index + 1}-${dia}">${dia}</td>`;
              dia++;
            }
          }
    
          html += '</tr>';
        }
    
        html += '</table>';
      });
    }
  
    html += '</div>';
  
    const calendarContainer = this.elementRef.nativeElement.querySelector('#calendar');
    calendarContainer.innerHTML = html;
  }

  // Función para resaltar la fecha al hacer clic
highlightDate(event: any) {
  const target = event.target;
  const selectedCells = Array.from(this.elementRef.nativeElement.querySelectorAll('td.highlight'));
  selectedCells.forEach((cell: any) => {
    if (cell.dataset.date !== target.dataset.date) {
      cell.classList.remove('highlight');
    }
  });
  if (target.tagName === 'TD') {
    target.classList.toggle('highlight');
  }
}
}
