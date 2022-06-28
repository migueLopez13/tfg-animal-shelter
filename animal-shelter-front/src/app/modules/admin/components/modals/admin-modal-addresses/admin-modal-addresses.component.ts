import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-admin-modal-addresses',
  templateUrl: './admin-modal-addresses.component.html'
})
export class AdminModalAddressesComponent implements OnInit {

  @Input() addresses!: UserAddress[]
  @Output() close = new EventEmitter()

  element!: any
  showAddress = false
  showConfirmation = false

  constructor() { }

  ngOnInit(): void {
  }

  openEdit(address: UserAddress) {
    this.element = address
    this.showAddress = true
  }
  openAdd() {
    this.element = undefined
    this.showAddress = true
  }
  openConfirmation(idAddress: number) {
    this.element = idAddress
    this.showConfirmation = true
  }

  closeSocial() {
    this.showAddress = false
  }
  closeConfirmation() {
    this.showConfirmation = false
  }

  addElement(address: UserAddress) { }
  editElement(address: UserAddress) { }
  removeElement(id: number) { }

  closeModal() {
    this.close.emit()
  }
}
