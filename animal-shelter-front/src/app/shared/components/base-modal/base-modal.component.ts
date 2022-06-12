import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html'
})
export class BaseModalComponent {

  @Output() close = new EventEmitter()

  constructor() { }

  closeModal() {
    this.close.emit()
  }

}
