import { User } from "src/app/common/interfaces/user.interface";



export interface UsersState {
  loading: boolean;
  users: ReadonlyArray<User>;
  error?: any;
}