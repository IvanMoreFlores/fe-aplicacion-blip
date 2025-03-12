import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes-report',
  templateUrl: './succes-report.page.html',
  styleUrls: ['./succes-report.page.scss'],
})
export class SuccesReportPage implements OnInit {
  constructor(private router: Router) {}


  ngOnInit() {
    this.startRedirection();
  }

  // Método para redirigir tras 2 segundos
  private startRedirection() {
    setTimeout(() => {
      this.router.navigate(['/tab-home/blip-home']); // Cambia '/next-page' por la ruta real
    }, 2000);
  }

}
