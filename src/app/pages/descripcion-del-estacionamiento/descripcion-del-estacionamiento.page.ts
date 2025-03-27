import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-del-estacionamiento',
  templateUrl: './descripcion-del-estacionamiento.page.html',
  styleUrls: ['./descripcion-del-estacionamiento.page.scss'],
})
export class DescripcionDelEstacionamientoPage implements OnInit {
  data: any;
  text: string = 'new';

  constructor(private router: Router) {}

  ngOnInit() {}

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  navigate() {
    this.router.navigate(['/descripcion-del-espacio']);
  }
}
