import { User } from "src/app/shared/domain/interfaces/user.interface";



export interface UsersState {
  loading: boolean;
  users: ReadonlyArray<User>;
  error?: any;
}