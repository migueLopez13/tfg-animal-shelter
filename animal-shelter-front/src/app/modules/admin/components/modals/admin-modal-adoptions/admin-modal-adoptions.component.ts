import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-admin-modal-adoptions',
  templateUrl: './admin-modal-adoptions.component.html'
})
export class AdminModalAdoptionsComponent implements OnInit {

  @Input() element!: User
  @Output() close = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit()
  }
}
