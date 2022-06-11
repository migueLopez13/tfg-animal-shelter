import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html'
})
export class ProfileImageComponent implements OnInit {

  @Input() profile!: User
  @Output() edit = new EventEmitter()
  editIcon = faPencilAlt

  constructor() { }

  ngOnInit(): void {
  }

  editImage() {
    this.edit.emit()
  }
}
