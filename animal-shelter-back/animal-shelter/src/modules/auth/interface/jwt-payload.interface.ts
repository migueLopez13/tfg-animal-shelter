import { Role } from "src/shared/database/entities/role.entity";

export interface JWTPayload {
  email: string;
  name: string,
  roles: Role[]
}