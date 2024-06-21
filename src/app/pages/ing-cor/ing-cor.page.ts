import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ing-cor',
  templateUrl: './ing-cor.page.html',
  styleUrls: ['./ing-cor.page.scss'],
})
export class IngCorPage implements OnInit {
  email: string = '';
  isEmailValid: boolean = false;

  onEmailChange(): void {
    this.isEmailValid = this.email.trim().length > 0;
  }
  constructor(private router: Router) {}
  goToDisplayPage() {
    this.router.navigate(['/recu-cuen'], { queryParams: { text: this.email } });
  }
  ngOnInit() {
  }

}
