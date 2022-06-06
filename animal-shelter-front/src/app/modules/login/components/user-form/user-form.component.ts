import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  @Input() formGroup!: FormGroup
  @Input() saveLabel!: string
  @Output() save = new EventEmitter()
  @Output() back = new EventEmitter()

  constructor() {
  }

  saveForm() {
    this.save.emit(this.formGroup)
  }

  goBack() {
    this.back.emit()
  }
}
