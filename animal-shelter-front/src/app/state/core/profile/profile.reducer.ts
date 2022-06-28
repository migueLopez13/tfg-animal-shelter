import { createReducer, on } from '@ngrx/store';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { UserSocial } from 'src/app/shared/domain/interfaces/user-social.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { ProfileState } from '../../interfaces/profile.state.interface';
import { ProfileActions } from './profile.action';


export const initialState: ProfileState = {
  loading: false,
  isAuthenticated: false,
  user: {} as User,
  phones: [],
  addresses: [],
  socialLinks: []
};

export const ProfileReducer = createReducer(
  initialState,

  on(ProfileActions.checkUserRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.checkUserSuccess, (state, { user }) => {
    const phones = user.phone as UserPhone[]
    const addresses = user.address as UserAddress[]
    const socialLinks = user.social as UserSocial[]
    return ({ ...state, loading: false, isAuthenticated: true, user: user, phones, addresses, socialLinks })
  }),

  on(ProfileActions.checkUserFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),

  on(ProfileActions.updateProfileRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updateProfileSuccess, (state, { user }) =>
    ({ ...state, loading: false, user })),

  on(ProfileActions.updateProfileFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.updateAvatarRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updateAvatarSuccess, (state, { user }) =>
    ({ ...state, loading: false, user })),

  on(ProfileActions.updateAvatarFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.addPhoneRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.addPhoneSuccess, (state, { phone }) => ({
    ...state, loading: false,
    phones: [...state.phones, phone]
  })),

  on(ProfileActions.addPhoneFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.addAddressRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.addAddressSuccess, (state, { address }) => ({
    ...state, loading: false,
    addresses: [...state.addresses, address]
  })),

  on(ProfileActions.addAddressFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.addSocialRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.addSocialSuccess, (state, { social }) => ({
    ...state, loading: false,
    socialLinks: [...state.socialLinks, social]
  })),

  on(ProfileActions.addSocialFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.updatePhoneRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updatePhoneSuccess, (state, { phone }) => ({
    ...state, loading: false,
    phones: state.phones.map((_phone) =>
      _phone.id === phone.id ? phone : _phone)
  })
  ),

  on(ProfileActions.updatePhoneFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.updateAddressRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updateAddressSuccess, (state, { address }) => ({
    ...state, loading: false,
    addresses: state.addresses.map((_address) =>
      _address.id === address.id ? address : _address)
  })
  ),

  on(ProfileActions.updateAddressFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.updateSocialRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updateSocialSuccess, (state, { social }) => ({
    ...state, loading: false,
    socialLinks: state.socialLinks.map((_social) =>
      _social.id === social.id ? social : _social)
  })
  ),

  on(ProfileActions.updateSocialFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.deletePhoneRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.deletePhoneSuccess, (state, { idPhone }) =>
  ({
    ...state, loading: false,
    phones: state.phones.filter(({ id }) => id !== idPhone
    )
  })
  ),

  on(ProfileActions.deletePhoneFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.deleteAddressRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.deleteAddressSuccess, (state, { idAddress }) =>
  ({
    ...state, loading: false,
    addresses: state.addresses.filter(({ id }) => id !== idAddress)
  })),

  on(ProfileActions.deleteAddressFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.deleteSocialRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.deleteSocialSuccess, (state, { idSocial }) =>
  ({
    ...state, loading: false,
    socialLinks: state.socialLinks.filter(({ id }) => id !== idSocial)
  })),

  on(ProfileActions.deleteSocialFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(ProfileActions.logoutRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.logoutSuccess, (state) =>
    ({ ...state, loading: true, isAuthenticate: false, user: {} as User })),

);