import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descripcion-del-espacio',
  templateUrl: './descripcion-del-espacio.page.html',
  styleUrls: ['./descripcion-del-espacio.page.scss'],
})
export class DescripcionDelEspacioPage {

  @ViewChildren('customBtn') customBtns!: QueryList<ElementRef>;
  selectedIndex: number | null = null; // Inicialmente ningún botón seleccionado

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInfo();
   }

  async getInfo() {
    const adConfig = await this.storage.getItem('adConfig');
    if (!adConfig) {
      const token = await this.storage.getItem('token');
      this.api.getAdvertiseConfig(token).subscribe(
        (response: any) => {
          const data = response.data;
          this.storage.setItem('adConfig', data);
        }
      )
    }
  }

  onRadioChange(selectedIndex: number) {
    this.selectedIndex = selectedIndex; // Actualiza el índice seleccionado
    this.customBtns.forEach((btn, index) => {
      if (index === selectedIndex) {
        btn.nativeElement.classList.add('custom-btn-selected'); // Añade la clase seleccionada
      } else {
        btn.nativeElement.classList.remove('custom-btn-selected'); // Elimina la clase de los otros botones
      }
    });
  }

 getSpace(){
  console.log(this.selectedIndex);
  this.router.navigate(['/descripcion-de-direccion'], { queryParams: { tga_id: this.selectedIndex } });

 }
}
