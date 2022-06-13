import { UserPhone } from "src/app/shared/domain/interfaces/user-phone.interface";
import { User } from "src/app/shared/domain/interfaces/user.interface";

export interface ProfileState {
  loading: boolean;
  isAuthenticated: boolean,
  user: Readonly<User>;
  phones: ReadonlyArray<UserPhone>;
  error?: any;
}