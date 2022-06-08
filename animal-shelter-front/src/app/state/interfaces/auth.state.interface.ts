import { User } from "src/app/shared/domain/interfaces/user.interface";

export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean,
  user?: Readonly<User>;
  error?: any;
}