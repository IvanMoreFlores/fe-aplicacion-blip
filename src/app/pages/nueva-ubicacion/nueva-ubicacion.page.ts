import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-ubicacion',
  templateUrl: './nueva-ubicacion.page.html',
  styleUrls: ['./nueva-ubicacion.page.scss'],
})
export class NuevaUbicacionPage implements OnInit {
  // Definimos la lista de lugares con su tipo de dato
  lugares: { nombre: string; direccion: string }[] = []; // Array inicializado vacío

  constructor() {}

  // Método para manejar la búsqueda de direcciones
  onSearch(event: any): void {
    const query: string = event.target.value; // Aseguramos que sea tipo string

    if (query && query.trim() !== '') {
      // Simulación de resultados (puedes reemplazarlo con una API real)
      this.lugares = [
        { nombre: 'Calle 44', direccion: 'C.44, Bellavista' },
        { nombre: 'Calle 44', direccion: 'C.44, Bellavista' },
        { nombre: 'Calle 44', direccion: 'C.44, Bellavista' },
      ];
    } else {
      // Si el input está vacío, limpiamos los resultados
      this.lugares = [];
    }
  }

  // Método para seleccionar un lugar
  seleccionarLugar(lugar: { nombre: string; direccion: string }): void {
    console.log('Lugar seleccionado:', lugar);
    // Aquí podrías agregar lógica para guardar la ubicación seleccionada o navegar a otra página
  }

  // Método para abrir el mapa
  abrirMapa(): void {
    console.log('Abrir mapa para seleccionar ubicación');
    // Aquí podrías navegar a un componente con el mapa
  }
  ngOnInit(){
    
  }
}