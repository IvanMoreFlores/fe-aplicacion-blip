import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-succes-cor',
  templateUrl: './succes-cor.page.html',
  styleUrls: ['./succes-cor.page.scss'],
})
export class SuccesCorPage implements OnInit {
  email: string = '';
  code: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  setMail() {
    this.route.queryParams.subscribe((params) => {
      this.code = params['code'];
      this.email = params['email'];
      console.log(this.email);
    });
  }
  ngOnInit() {
    this.setMail();
    setTimeout(() => {
      this.router.navigate(['/olv-con'], {
        queryParams: { email: this.email, code: this.code },
      });
    }, 2000);
  }
}
