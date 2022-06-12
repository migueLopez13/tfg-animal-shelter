import { User } from "src/app/shared/domain/interfaces/user.interface";

export interface ProfileState {
  loading: boolean;
  isAuthenticated: boolean,
  user: ReadonlyArray<User>;
  error?: any;
}