import { Injectable } from "@angular/core";
import { UserAddress } from "src/app/shared/domain/interfaces/user-address.interface";
import { UserPhone } from "src/app/shared/domain/interfaces/user-phone.interface";
import { UserSocial } from "src/app/shared/domain/interfaces/user-social.interface";
import { User } from "src/app/shared/domain/interfaces/user.interface";
import { UserAddressRepository } from "./repository/user-address.repository";
import { UserPhoneRepository } from "./repository/user-phone.repository";
import { UserSocialRepository } from "./repository/user-social.repository";
import { UsersRepository } from "./repository/users.repository";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService<User> {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userAddressRepository: UserAddressRepository,
    private readonly userPhoneRepository: UserPhoneRepository,
    private readonly userSocialRepository: UserSocialRepository,

  ) {
    super(usersRepository)
  }

  addAddress(address: UserAddress) {
    return this.userAddressRepository.save(address)
  }

  updateAddress(id: number, address: UserAddress) {
    return this.userAddressRepository.update(id, address)
  }

  removeAddress(id: number) {
    return this.userAddressRepository.delete(id)
  }

  addPhone(phone: UserPhone) {
    return this.userPhoneRepository.save(phone)
  }

  updatePhone(id: number, phone: UserPhone) {
    return this.userPhoneRepository.update(id, phone)
  }

  updateAvatar(base64: string) {
    return this.usersRepository.updateAvatar(base64)
  }

  removePhone(id: number) {
    return this.userPhoneRepository.delete(id)
  }

  addSocial(social: UserSocial) {
    return this.userSocialRepository.save(social)
  }

  updateSocial(id: number, social: UserSocial) {
    return this.userSocialRepository.update(id, social)
  }

  removeSocial(id: number) {
    return this.userSocialRepository.delete(id)
  }
}