import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-admin-modal-phones',
  templateUrl: './admin-modal-phones.component.html'
})
export class AdminModalPhonesComponent implements OnInit {

  @Input() element!: User
  @Output() close = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit()
  }
}
