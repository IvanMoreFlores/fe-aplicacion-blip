import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  isNavbarOpen: boolean = false;
  months: { name: string, days: number[][] }[][] = [];

  constructor() { }

  ngOnInit() {
    this.generateMonths();
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  generateMonths() {
    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    let currentRow: { name: string, days: number[][] }[] = [];
    for (let i = 0; i < 12; i++) {
      const numDays = new Date(2024, i + 1, 0).getDate(); // Obtener el número de días del mes
      const firstDay = new Date(2024, i, 1).getDay(); // Obtener el día de la semana del primer día del mes
      let daysOfMonth: number[][] = [[]];
      let currentWeek = 0;

      // Llenar el arreglo con los números de los días del mes organizados en filas y columnas
      for (let j = 1; j <= numDays; j++) {
        if (j === 1 && firstDay !== 0) {
          daysOfMonth[currentWeek] = Array.from({ length: firstDay }, _ => 0); // Rellenar los días en blanco hasta llegar al primer día del mes
        }

        if (daysOfMonth[currentWeek].length === 7) {
          daysOfMonth.push([]); // Empezar una nueva fila cada vez que se llegue al final de una semana
          currentWeek++;
        }
        
        daysOfMonth[currentWeek].push(j); // Agregar el número del día al arreglo de la semana actual
      }

      // Rellenar los días restantes de la última semana con ceros si es necesario
      if (daysOfMonth[currentWeek].length < 7) {
        const remainingDays = 7 - daysOfMonth[currentWeek].length;
        daysOfMonth[currentWeek] = [...daysOfMonth[currentWeek], ...Array.from({ length: remainingDays }, _ => 0)];
      }

      currentRow.push({ name: monthNames[i], days: daysOfMonth });
      if (currentRow.length === 3) {
        this.months.push(currentRow);
        currentRow = [];
      }
    }

    // Si quedan meses en la fila actual, agregamos esa fila también
    if (currentRow.length > 0) {
      this.months.push(currentRow);
    }
  }
}
