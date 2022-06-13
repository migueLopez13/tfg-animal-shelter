import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-profile-phone',
  template: '<div></div>'
})
export class Section {

  showConfirmation = false
  showEdit = false
  showAdd = false

  element: any

  constructor() { }


  openConfirmation(id: number) {
    this.element = id
    this.showConfirmation = true
  }
  closeConfirmation() {
    this.showConfirmation = false
  }

  openEdit(element: any) {
    this.element = element
    this.showEdit = true
  }

  openAdd() {
    this.element = undefined
    this.showAdd = true
  }

  closeModal() {
    this.showAdd = false
    this.showEdit = false
  }


  editElement(element: any) {
    this.closeModal()
  }

  addElement(element: any) {
    this.closeModal()

  }

  removeElement(id: number) {
    this.closeConfirmation()
  }
}