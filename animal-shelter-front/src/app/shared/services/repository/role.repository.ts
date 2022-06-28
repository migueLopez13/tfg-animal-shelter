import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Role } from "src/app/shared/domain/interfaces/role.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class RoleRepository extends BaseRepository<Role>{
  constructor(private readonly http: HttpClient) {
    super(http, 'roles')
  }
}