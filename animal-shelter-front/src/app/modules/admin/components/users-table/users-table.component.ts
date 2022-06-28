import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faCross, faEye, faPencilAlt, faPlus, faSearch, faTimes, faTimesCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { UsersSelectors } from 'src/app/state/core/users/users.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit, AfterViewInit {
  addIcon = faPlus
  showMoreIcon = faEye
  editIcon = faPencilAlt
  searchIcon = faSearch
  xIcon = faXmark
  usersData = new MatTableDataSource<Readonly<User>>()
  isLoadingResults = false
  usersColumns = [
    'email',
    'name',
    'surname',
    'phones',
    'addresses',
    'social',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() add = new EventEmitter()
  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter()
  @Output() social = new EventEmitter()
  @Output() addresses = new EventEmitter()
  @Output() phones = new EventEmitter()

  constructor(
    private readonly store: Store<AppState>
  ) { }


  ngOnInit(): void {
    this.store.select(UsersSelectors.selectUsers).subscribe((users) => {
      this.usersData.data = users as Readonly<User>[]
    })
  }

  ngAfterViewInit(): void {
    this.usersData.paginator = this.paginator;
    this.usersData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usersData.filter = filterValue.trim().toLowerCase();
  }

  emitAdd() {
    this.add.emit()
  }
  emitEdit(user: User) {
    this.edit.emit(user)
  }
  emitDelete(user: User) {
    this.delete.emit(user)
  }
  emitPhones(user: User) {
    this.phones.emit(user)
  }
  emitAddresses(user: User) {
    this.addresses.emit(user)
  }
  emitSocial(user: User) {
    this.social.emit(user)
  }
}
