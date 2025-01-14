import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader-olvcon',
  templateUrl: './loader-olvcon.page.html',
  styleUrls: ['./loader-olvcon.page.scss'],
})
export class LoaderOlvconPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['/succes-restcon']);
    }, 3000);
  }
}
