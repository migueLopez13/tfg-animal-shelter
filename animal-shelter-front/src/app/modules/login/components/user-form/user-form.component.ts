import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    if (this.formGroup.valid)
      return this.save.emit(this.formGroup.value)
  }

  goBack() {
    this.back.emit()
  }
}
