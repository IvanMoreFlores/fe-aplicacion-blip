import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes-restcon',
  templateUrl: './succes-restcon.page.html',
  styleUrls: ['./succes-restcon.page.scss'],
})
export class SuccesRestconPage implements OnInit {
  constructor(private router: Router) {}


  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/log-con']); 
    }, 2000); 
  }
}
