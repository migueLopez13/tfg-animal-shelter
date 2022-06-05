import { createReducer, on } from '@ngrx/store';
import { UsersState } from '../../interfaces/users.state.interface';
import { UsersActions } from './users.action';

export const initialState: UsersState = {
  loading: false,
  users: []
};

export const UsersReducer = createReducer(
  initialState,

  on(UsersActions.loadUsersRequest, (state) =>
    ({ ...state, loading: true })),

  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    ({ ...state, loading: false, users })),

  on(UsersActions.loadUsersFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(UsersActions.loadUserRequest, (state) =>
    ({ ...state, loading: true })),

  on(UsersActions.loadUserSuccess, (state, { user }) =>
    ({ ...state, loading: false, user })),

  on(UsersActions.loadUserFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(UsersActions.addUserRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.addUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    Users: [...state.users, user]
  })),

  on(UsersActions.addUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.updateUserRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((_user) => {
      return _user.email === user.email ? user : _user
    })]
  })),

  on(UsersActions.updateUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.removeUserRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.removeUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    Users: [...state.users.filter(({ email }) => email !== user.email)]
  })),

  on(UsersActions.removeUserFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

  on(UsersActions.addUserAddressRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.addUserAddressSuccess, (state, { address }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === address.userEmail) {
        user.address?.push(address)
      }
      return user;
    })]
  })),

  on(UsersActions.addUserAddressFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.updateUserAddressRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.updateUserAddressSuccess, (state, { address }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === address.userEmail) {
        user.address?.map((_address) => _address.id === address.id ? address : _address)
      }
      return user;
    })]
  })),

  on(UsersActions.updateUserAddressFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.removeUserAddressRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.removeUserAddressSuccess, (state, { address }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === address.userEmail) {
        user.address?.filter(({ id }) => id !== address.id)
      }
      return user;
    })]
  })),

  on(UsersActions.removeUserAddressFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

  on(UsersActions.addUserSocialRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.addUserSocialSuccess, (state, { social }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === social.userEmail) {
        user.social?.push(social)
      }
      return user;
    })]
  })),

  on(UsersActions.addUserSocialFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.updateUserSocialRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.updateUserSocialSuccess, (state, { social }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === social.userEmail) {
        user.social?.map((_social) => _social.id === social.id ? social : _social)
      }
      return user;
    })]
  })),

  on(UsersActions.updateUserSocialFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.removeUserSocialRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.removeUserSocialSuccess, (state, { social }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === social.userEmail) {
        user.social?.filter(({ id }) => id !== social.id)
      }
      return user;
    })]
  })),

  on(UsersActions.removeUserSocialFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

  on(UsersActions.addUserPhoneRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.addUserPhoneSuccess, (state, { phone }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === phone.userEmail) {
        user.phone?.push(phone)
      }
      return user;
    })]
  })),

  on(UsersActions.addUserPhoneFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.updateUserPhoneRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.updateUserPhoneSuccess, (state, { phone }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === phone.userEmail) {
        user.phone?.map((_phone) => _phone.id === phone.id ? phone : _phone)
      }
      return user;
    })]
  })),

  on(UsersActions.updateUserPhoneFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(UsersActions.removeUserPhoneRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(UsersActions.removeUserPhoneSuccess, (state, { phone }) => ({
    ...state,
    loading: false,
    Users: [...state.users.map((user) => {
      if (user.email === phone.userEmail) {
        user.phone?.filter(({ id }) => id !== phone.id)
      }
      return user;
    })]
  })),

  on(UsersActions.removeUserPhoneFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),
);