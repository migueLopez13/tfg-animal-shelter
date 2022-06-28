
import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app.state.interface';
import { UsersState } from '../../interfaces/users.state.interface';


const UsersFeature = ({ users }: AppState) => users;

export const UsersSelectors = {
  selectUsers: createSelector(
    UsersFeature,
    ({ users }: UsersState) => users
  ),

  selectUsersLoading: createSelector(
    UsersFeature,
    ({ loading }: UsersState) => loading
  ),

  selectUsersError: createSelector(
    UsersFeature,
    ({ error }: UsersState) => error
  ),

  selectUserById: (userEmail: string) =>
    createSelector(UsersFeature, ({ users }) =>
      users.find(({ email }) => email === userEmail)
    ),
};