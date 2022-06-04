import { Injectable } from "@angular/core";
import { AdoptionsRepository } from "../repository/adoptions.repository";
import { BaseRepository } from "../repository/base.repository";

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  constructor(private readonly baseRepository: BaseRepository<T>) { }

  findAll() {
    return this.baseRepository.findAll()
  }

  find(id: number) {
    return this.baseRepository.findOne(id)
  }

  update(id: number, t: T) {
    return this.baseRepository.update(id, t)
  }

  add(t: T) {
    return this.baseRepository.save(t)
  }

  remove(id: number) {
    return this.baseRepository.delete(id)
  }
}