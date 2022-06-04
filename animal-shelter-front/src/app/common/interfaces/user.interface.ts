import { Role } from "./role.interface";
import { UserAddress } from "./user-address.interface";
import { UserPhone } from "./user-phone.interface";
import { UserSocial } from "./user-social.interface";

export interface User {
  email: string;
  name: string;
  surname: string;
  avatar: string;
  social: UserSocial[];
  address: UserAddress[];
  phone: UserPhone[];
  role: Role[];
}