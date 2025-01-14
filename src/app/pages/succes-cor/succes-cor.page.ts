import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes-cor',
  templateUrl: './succes-cor.page.html',
  styleUrls: ['./succes-cor.page.scss'],
})
export class SuccesCorPage implements OnInit {
  constructor(private router: Router) {}


  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/olv-con']); 
    }, 2000); 
  }

}
