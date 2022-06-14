import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSocial } from '../../domain/interfaces/user-social.interface';

@Component({
  selector: 'app-modal-social',
  templateUrl: './modal-social.component.html'
})
export class ModalSocialComponent implements OnInit {

  socials = ['instagram', 'facebook', 'twitter']

  @Input() element?: UserSocial
  @Output() edit = new EventEmitter()
  @Output() add = new EventEmitter()
  @Output() close = new EventEmitter()

  socialForm!: FormGroup
  name!: FormControl
  url!: FormControl

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setControls()
    this.socialForm = this.fb.group(
      {
        id: '',
        name: this.name,
        url: this.url,
        userEmail: '',
      }
    )
    if (this.element) {
      this.setValues()
    }
  }

  setControls() {
    this.name = new FormControl(
      '', [Validators.required]
    );
    this.url = new FormControl(
      '', [Validators.required]
    );
  }
  setValues() {
    this.socialForm.setValue(this.element as UserSocial)
  }

  closeModal() {
    this.close.emit()
  }
  editElement() {
    if (this.socialForm.valid)
      this.edit.emit(this.socialForm.value)
  }
  addElement() {
    if (this.socialForm.valid)
      this.add.emit(this.socialForm.value)
  }

  saveElement() {
    if (this.element) {
      return this.editElement()
    }
    return this.addElement()
  }
}
