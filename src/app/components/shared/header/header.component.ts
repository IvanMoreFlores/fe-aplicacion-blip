import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() withArrowLeft: boolean = false;
  @Input() withTitleLeft: boolean = false;
  @Input() titleLeft: string = '';
  @Input() withArrowDown: boolean = false;
  @Input() withTrash: boolean = false;
  @Input() route: string = '';
  @Output() navigateTo = new EventEmitter<string>();

  constructor(private router: Router) {}

  onNavigate() {
    this.navigateTo.emit(this.route);
  }
}
