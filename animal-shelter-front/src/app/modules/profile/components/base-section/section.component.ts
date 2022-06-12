import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-phone',
  template: '<div></div>'
})
export class Section<T>{

  @Input() elements?: T[]
  @Input() id?: string

  @Output() add = new EventEmitter()
  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter()

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

  openAdd() {
    this.element = undefined
    this.showAdd = true
  }

  closeModal() {
    this.showAdd = false
    this.showEdit = false
  }


  editElement(element: T) {
    this.closeModal()
    this.edit.emit(element)
  }

  addElement(element: T) {
    this.closeModal()
    this.add.emit(element)
  }

  removeElement(id: number) {
    this.closeConfirmation()
    this.delete.emit(id)
  }
}