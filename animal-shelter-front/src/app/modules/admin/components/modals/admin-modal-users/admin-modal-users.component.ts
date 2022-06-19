import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-admin-modal-users',
  templateUrl: './admin-modal-users.component.html'
})
export class AdminModalUsersComponent implements OnInit {

  @Input() element!: User | undefined
  @Output() close = new EventEmitter()
  @Output() save = new EventEmitter()
  @Output() add = new EventEmitter()

  userForm!: FormGroup
  name!: FormControl
  surname!: FormControl
  email!: FormControl

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.createValidators()
    this.userForm = this.fb.group(
      {
        name: this.name,
        surname: this.surname,
        email: this.email,
        avatar: '',
        social: '',
        address: '',
        adoptions: '',
        phone: '',
        role: ''
      })

    if (this.element) {
      this.userForm.setValue(this.element)
    }
  }

  createValidators() {
    this.name = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
    this.surname = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
    this.email = new FormControl(
      '', [Validators.required, Validators.email]
    );
  }

  confirm() {
    if (this.element) {
      this.emitSave()
    } else {
      this.emitAdd()
    }
  }
  emitSave() {
    this.save.emit(this.userForm.value)
  }

  emitAdd() {
    this.add.emit(this.userForm.value)
  }

  closeModal() {
    this.close.emit()
  }
}
