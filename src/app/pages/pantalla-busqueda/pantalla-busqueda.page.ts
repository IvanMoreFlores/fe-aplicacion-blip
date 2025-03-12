import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-busqueda',
  templateUrl: './pantalla-busqueda.page.html',
  styleUrls: ['./pantalla-busqueda.page.scss'],
})
export class PantallaBusquedaPage implements OnInit {
  // Lista completa de ubicaciones
  allLocations = [
    { name: 'Casa Mafer', address: 'Av. Santo Toribio, 481, San Isidro' },
    { name: 'Calle 44', address: 'C.44, Bellavista' },
    { name: 'Miraflores', address: '' },
    { name: 'Parque Kennedy', address: 'Av. Larco, Miraflores' }
  ];

  // Lista para ubicaciones guardadas (puede ser parte de `allLocations`)
  savedLocations = [
    { name: 'Casa Mafer', address: 'Av. Santo Toribio, 481, San Isidro' }
  ];

  // Resultados filtrados
  results = [...this.allLocations];

  // Método que maneja la entrada del usuario en el ion-searchbar
  handleInput(event: any) {
    const query = event.target.value.toLowerCase(); // Texto ingresado en el buscador

    // Si no hay texto, muestra todos los resultados
    if (!query.trim()) {
      this.results = [...this.allLocations];
      return;
    }

    // Filtrar la lista de ubicaciones según el texto ingresado
    this.results = this.allLocations.filter(location =>
      location.name.toLowerCase().includes(query) || 
      location.address.toLowerCase().includes(query)
    );
  }
  constructor() { }

  ngOnInit() {
  }

}
