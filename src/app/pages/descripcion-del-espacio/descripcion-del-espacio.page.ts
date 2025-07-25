import {
  Component,
  QueryList,
  ViewChildren,
  ElementRef,
  OnInit,
} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-del-espacio',
  templateUrl: './descripcion-del-espacio.page.html',
  styleUrls: ['./descripcion-del-espacio.page.scss'],
})
export class DescripcionDelEspacioPage implements OnInit {
  @ViewChildren('customBtn') customBtns!: QueryList<ElementRef>;
  selectedIndex: number | null = null;
  gar_nombre: string = '';
  tga_id: string = '';

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getInfo();
    this.route.queryParams.subscribe((params) => {
      this.gar_nombre = params['gar_nombre'] || '';
      this.tga_id = params['tga_id'] || '';
    });
  }

  async getInfo() {
    const adConfig = await this.storage.getItem('adConfig');
    if (!adConfig) {
      const token = await this.storage.getItem('token');
      this.api.getAdvertiseConfig(token).subscribe((response: any) => {
        const data = response.data;
        this.storage.setItem('adConfig', data);
      });
    }
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  onRadioChange(selectedIndex: number, position: number) {
    this.selectedIndex = selectedIndex;
    this.customBtns.forEach((btn, index) => {
      if (index === position - 1) {
        btn.nativeElement.classList.add('custom-btn-selected');
      } else {
        btn.nativeElement.classList.remove('custom-btn-selected');
      }
    });
  }

  getSpace() {
    if (!this.selectedIndex) {
      alert('Debes elegir una opción.');
      return;
    }

    this.router.navigate(['/descripcion-de-direccion'], {
      queryParams: {
        gar_nombre: this.gar_nombre,
        tga_id: this.selectedIndex,
      },
    });
  }
}
