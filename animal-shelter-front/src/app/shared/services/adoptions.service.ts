import { Injectable } from "@angular/core";
import { Adoption } from "src/app/shared/domain/interfaces/adoption.interface";
import { AdoptionsRepository } from "./repository/adoptions.repository";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root',
})
export class AdoptionsService extends BaseService<Adoption> {
  constructor(private readonly adoptionsRepository: AdoptionsRepository) {
    super(adoptionsRepository)
  }
}