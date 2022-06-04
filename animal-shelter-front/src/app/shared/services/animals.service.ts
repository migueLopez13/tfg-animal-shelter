import { Injectable } from "@angular/core";
import { AnimalMedia } from "src/app/common/interfaces/animal-media.interface";
import { Animal } from "src/app/common/interfaces/animal.interface";
import { AnimalMediaRepository } from "../repository/animal-media.repository";
import { AnimalsRepository } from "../repository/animals.repository";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root',
})
export class AnimalsService extends BaseService<Animal> {
  constructor(
    private readonly animalsRepository: AnimalsRepository,
    private readonly animalMediaRepository: AnimalMediaRepository
  ) {
    super(animalsRepository)
  }

  addMedia(media: AnimalMedia) {
    return this.animalMediaRepository.save(media)
  }
  updateMedia(id: number, media: AnimalMedia) {
    return this.animalMediaRepository.update(id, media)
  }

  removeAMedia(id: number) {
    return this.animalMediaRepository.delete(id)
  }
}