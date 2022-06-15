import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { UsersActions } from 'src/app/state/core/users/users.action';
import { UsersSelectors } from 'src/app/state/core/users/users.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsersRequest())
  }

}
