import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { UsersActions } from 'src/app/state/core/users/users.action';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  showUser = false
  showConfirmation = false
  showSocialUser = false
  showPhonesUser = false
  showAddressesUser = false

  element?: any

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsersRequest())
  }

  addUser(user: User) {
    this.store.dispatch(UsersActions.addUserRequest({ user }))
    this.closeModalUser()
  }

  editUser(user: User) {
    const userEmail = this.element.email
    this.store.dispatch(UsersActions.updateUserRequest({ userEmail, user }))
    this.closeModalUser()

  }

  deleteUser(user: User) {
    this.store.dispatch(UsersActions.removeUserRequest({ userEmail: user.email }))
    this.closeModalConfirmation()
  }

  openNewUser() {
    this.element = undefined
    this.showUser = true
  }

  openEditUser($event: User) {
    this.element = $event
    this.showUser = true
  }

  openDeleteUser($event: User) {
    this.element = $event
    this.showConfirmation = true
  }

  openSocialUser($event: User) {
    this.element = $event.social
    this.showSocialUser = true
  }

  openAddressesUser($event: User) {
    this.element = $event.address
    this.showAddressesUser = true
  }

  openPhonesUser($event: User) {
    this.element = $event.phone
    this.showPhonesUser = true
  }

  closeModalUser() {
    this.showUser = false
  }
  closeModalConfirmation() {
    this.showConfirmation = false
  }
  closeModalPhones() {
    this.showPhonesUser = false
  }
  closeModalSocial() {
    this.showSocialUser = false
  }
  closeModalAddresses() {
    this.showAddressesUser = false
  }
}
