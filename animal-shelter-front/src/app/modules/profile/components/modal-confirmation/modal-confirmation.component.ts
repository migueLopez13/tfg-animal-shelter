import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html'
})
export class ModalConfirmationComponent implements OnInit {

  @Input() element: any
  @Output() true = new EventEmitter()
  @Output() close = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit()
  }
  confirm() {
    this.true.emit(this.element)
  }
}
