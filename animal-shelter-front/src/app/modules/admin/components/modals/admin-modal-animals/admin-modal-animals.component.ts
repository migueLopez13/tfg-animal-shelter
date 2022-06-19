import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-admin-modal-animals',
  templateUrl: './admin-modal-animals.component.html'
})
export class AdminModalAnimalsComponent implements OnInit {

  @Input() element!: User
  @Output() close = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit()
  }
}
