import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';

@Component({
  selector: 'app-profile-phone',
  template: '<div></div>'
})
export class Section<T>{

  @Input() elements?: T[]

  @Output() add = new EventEmitter()
  @Output() edit = new EventEmitter()
  @Output() remove = new EventEmitter()

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

  openEdit(element: T) {
    this.element = element
    this.showEdit = true
  }
  closeEdit() {
    this.showConfirmation = false
  }

  openAdd() {
    this.showAdd = true
  }
  closeAdd() {
    this.showAdd = false
  }


  editElement(element: T) {
    this.closeEdit()
    this.edit.emit(element)
  }

  addElement(element: T) {
    this.closeAdd()
    this.add.emit(element)
  }

  removeElement(id: number) {
    this.closeConfirmation()
    this.remove.emit(id)
  }
}