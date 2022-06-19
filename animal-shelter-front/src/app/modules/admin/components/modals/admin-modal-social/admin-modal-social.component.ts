import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';
import { UserSocial } from 'src/app/shared/domain/interfaces/user-social.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-admin-modal-social',
  templateUrl: './admin-modal-social.component.html'
})
export class AdminModalSocialComponent implements OnInit {

  @Input() socialList!: UserSocial[]
  @Output() close = new EventEmitter()

  element!: any
  showSocial = false
  showConfirmation = false

  constructor() { }

  ngOnInit(): void {
  }

  openEdit(social: UserSocial) {
    this.element = social
    this.showSocial = true
  }
  openAdd() {
    this.element = undefined
    this.showSocial = true
  }
  openConfirmation(idSocial: number) {
    this.element = idSocial
    this.showConfirmation = true
  }

  closeSocial() {
    this.showSocial = false
  }
  closeConfirmation() {
    this.showConfirmation = false
  }

  addElement(social: UserSocial) { }
  editElement(social: UserSocial) { }
  removeElement(id: number) { }

  closeModal() {
    this.close.emit()
  }
}
