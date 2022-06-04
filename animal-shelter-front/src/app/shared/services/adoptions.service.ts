import { Injectable } from "@angular/core";
import { Adoption } from "src/app/common/interfaces/adoption.interface";
import { AdoptionsRepository } from "../repository/adoptions.repository";

@Injectable({
  providedIn: 'root',
})
export class AdoptionsService {
  constructor(private readonly adoptionsRepository: AdoptionsRepository) { }

  findAll() {
    return this.adoptionsRepository.findAll()
  }

  find(id: number) {
    return this.adoptionsRepository.findOne(id)
  }

  add(adoption: Adoption) {
    return this.adoptionsRepository.save(adoption)
  }

  remove(id: number) {
    return this.adoptionsRepository.delete(id)
  }
}