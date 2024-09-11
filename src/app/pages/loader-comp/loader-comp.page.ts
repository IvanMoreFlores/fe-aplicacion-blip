import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader-comp',
  templateUrl: './loader-comp.page.html',
  styleUrls: ['./loader-comp.page.scss'],
})
export class LoaderCompPage implements OnInit, OnDestroy {
  private redirectTimeout: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.redirectTimeout) {
      this.startRedirectTimer();
    }
  }

  ngOnDestroy(): void {
    this.clearRedirectTimer();
  }

  startRedirectTimer(): void {
    this.clearRedirectTimer(); // Asegúrate de que no haya un temporizador previo
    this.redirectTimeout = setTimeout(() => {
      this.router.navigate(['/nuevo-anu-pone-alq']);
    }, 1000);
  }

  clearRedirectTimer(): void {
    if (this.redirectTimeout) {
      clearTimeout(this.redirectTimeout);
      this.redirectTimeout = null;
    }
  }
}
