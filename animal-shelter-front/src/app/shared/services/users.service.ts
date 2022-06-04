import { Injectable } from "@angular/core";
import { UserAddress } from "src/app/common/interfaces/user-address.interface";
import { UserPhone } from "src/app/common/interfaces/user-phone.interface";
import { UserSocial } from "src/app/common/interfaces/user-social.interface";
import { User } from "src/app/common/interfaces/user.interface";
import { UserAddressRepository } from "../repository/user-address.repository";
import { UserPhoneRepository } from "../repository/user-phone.repository";
import { UserSocialRepository } from "../repository/user-social.repository";
import { UsersRepository } from "../repository/users.repository";
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
    this.userAddressRepository.save(address)
  }

  updateAddress(id: number, address: UserAddress) {
    this.userAddressRepository.update(id, address)
  }

  removeAddress(id: number) {
    this.userAddressRepository.delete(id)
  }

  addPhone(phone: UserPhone) {
    this.userPhoneRepository.save(phone)
  }

  updatePhone(id: number, phone: UserPhone) {
    this.userPhoneRepository.update(id, phone)
  }

  removePhone(id: number) {
    this.userPhoneRepository.delete(id)
  }

  addSocial(social: UserSocial) {
    this.userSocialRepository.save(social)
  }

  updateSocial(id: number, social: UserSocial) {
    this.userSocialRepository.update(id, social)
  }

  removeSocial(id: number) {
    this.userSocialRepository.delete(id)
  }
}