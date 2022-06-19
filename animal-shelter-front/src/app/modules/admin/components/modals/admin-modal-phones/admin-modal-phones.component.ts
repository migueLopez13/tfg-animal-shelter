import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-admin-modal-phones',
  templateUrl: './admin-modal-phones.component.html'
})
export class AdminModalPhonesComponent implements OnInit {

  @Input() phones!: UserPhone[]
  @Output() close = new EventEmitter()

  element!: any
  showSocial = false
  showConfirmation = false

  constructor() { }

  ngOnInit(): void {
  }

  openEdit(phone: UserPhone) {
    this.element = phone
    this.showSocial = true
  }
  openAdd() {
    this.element = undefined
    this.showSocial = true
  }
  openConfirmation(idPhone: number) {
    this.element = idPhone
    this.showConfirmation = true
  }

  closeSocial() {
    this.showSocial = false
  }
  closeConfirmation() {
    this.showConfirmation = false
  }

  addElement(phone: UserPhone) { }
  editElement(phone: UserPhone) { }
  removeElement(id: number) { }

  closeModal() {
    this.close.emit()
  }
}
