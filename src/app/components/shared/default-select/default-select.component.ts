import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'default-select',
  templateUrl: './default-select.component.html',
  styleUrls: ['./default-select.component.scss'],
})
export class DefaultSelectComponent {
  @Input() label: string = '';
  @Input() options: { key: string; value: string }[] = [];
  @Input() selectedValue: string = '';
  @Input() withLabel: boolean = false;
  @Input() class: string = 'default-input';
  @Input() placeholder: string = '';
  @Output() selectedValueChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<{
    key: string;
    value: string;
  }>();

  onSelectionChange(event: any) {
    const selectedOption = this.options.find(
      (option) => option.value === event.detail.value
    );
    if (selectedOption) {
      this.selectedValueChange.emit(selectedOption.value);
      this.selectionChange.emit(selectedOption);
    }
  }
}
