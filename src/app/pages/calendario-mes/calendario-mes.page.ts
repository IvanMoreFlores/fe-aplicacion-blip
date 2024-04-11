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
    this.generarCalendario(2024); // Llama a la función para generar el calendario al inicializar el componente
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Función para generar el calendario
  generarCalendario(year: number) {
    const meses = [
      { nombre: "Enero 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Febrero 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Marzo 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Abril 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Mayo 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Junio 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Julio 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Agosto 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Septiembre 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Octubre 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Noviembre 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" },
      { nombre: "Diciembre 2024", imagenMenor: "/assets/images/Vector-2.png", imagenMayor: "/assets/images/Vector-3.png" }
    ];
  
    let html = '<div class="calendar-container">';
  
    meses.forEach((mes, index) => {
      html += `<h2><img src="${mes.imagenMenor}" alt="Menor">${mes.nombre}<img src="${mes.imagenMayor}" alt="Mayor"></h2>`;
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
            html += `<td>${dia}</td>`;
            dia++;
          }
        }
  
        html += '</tr>';
      }
  
      html += '</table>';
    });
  
    html += '</div>';
  
    
    const calendarContainer = this.elementRef.nativeElement.querySelector('#calendar');
    calendarContainer.innerHTML = html;
  }
}

