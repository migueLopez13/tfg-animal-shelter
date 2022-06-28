import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserPhone } from '../../../../../shared/domain/interfaces/user-phone.interface';

@Component({
  selector: 'app-modal-phone',
  templateUrl: './modal-phone.component.html'
})
export class ModalPhoneComponent implements OnInit {

  @Input() element?: UserPhone | number
  @Output() edit = new EventEmitter()
  @Output() add = new EventEmitter()
  @Output() close = new EventEmitter()

  phoneForm!: FormGroup
  phone!: FormControl
  label!: FormControl
  countryCode!: FormControl

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setControls()
    this.phoneForm = this.fb.group(
      {
        id: '',
        phone: this.phone,
        countryCode: this.countryCode,
        label: this.label,
        userEmail: ''
      }
    )
    if (this.element) {
      this.setValues()
    }
  }

  setControls() {
    this.phone = new FormControl(
      '', [Validators.required, Validators.pattern('^[0-9]{9}$')]
    );
    this.countryCode = new FormControl(
      '', [Validators.required, Validators.pattern('^[+][0-9]{2}$')]
    );
    this.label = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
  }
  setValues() {
    this.phoneForm.setValue(this.element as UserPhone)
  }

  closeModal() {
    this.close.emit()
  }
  editElement() {
    if (this.phoneForm.valid)
      this.edit.emit(this.phoneForm.value)
  }
  addElement() {
    if (this.phoneForm.valid)
      this.add.emit(this.phoneForm.value)
  }

  saveElement() {
    if (this.element) {
      return this.editElement()
    }
    return this.addElement()
  }
}
