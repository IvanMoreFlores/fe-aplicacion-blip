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
  @Input() modalId: string = '';
  @Input() trashModalId: string = '';

  @Output() navigateTo = new EventEmitter<string>();
  @Output() openModal = new EventEmitter<string>();
  @Output() openTrashModal = new EventEmitter<string>();

  constructor(private router: Router) {}

  onNavigate() {
    this.navigateTo.emit(this.route);
  }

  openModalById() {
    // Emitir evento para informar al componente padre
    this.openModal.emit(this.modalId);

    // Alternativa: activar el modal directamente
    if (this.modalId) {
      const modalTrigger = document.getElementById(this.modalId);
      if (modalTrigger) {
        modalTrigger.click();
      }
    }
  }

  openTrashModalById() {
    // Emitir evento para informar al componente padre
    this.openTrashModal.emit(this.trashModalId);

    // Activar el modal directamente
    if (this.trashModalId) {
      const modalTrigger = document.getElementById(this.trashModalId);
      if (modalTrigger) {
        modalTrigger.click();
      }
    }
  }
}
