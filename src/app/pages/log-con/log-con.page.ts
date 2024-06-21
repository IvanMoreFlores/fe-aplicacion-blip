import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-con',
  templateUrl: './log-con.page.html',
  styleUrls: ['./log-con.page.scss'],
})
export class LogConPage implements OnInit {
  email2: string = '';
  isEmailValid: boolean = false;

  onEmailChange(): void {
    this.isEmailValid = this.email2.trim().length > 0;
  }
  constructor(private router: Router) {}
  goToDisplayPage() {
    this.router.navigate(['/log-bin'], { queryParams: { EMAIL2: this.email2 } });
  }
  ngOnInit() {
  }
}
