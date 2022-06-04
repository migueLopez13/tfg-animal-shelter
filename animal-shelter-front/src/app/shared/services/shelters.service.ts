import { Injectable } from "@angular/core";
import { ShelterMedia } from "src/app/common/interfaces/shelter-media.interface";
import { ShelterSocial } from "src/app/common/interfaces/shelter-social.interface";
import { Shelter } from "src/app/common/interfaces/shelter.interface";
import { User } from "src/app/common/interfaces/user.interface";
import { ShelterMediaRepository } from "../repository/shelter-media.repository";
import { ShelterSocialRepository } from "../repository/shelter-social.repository";
import { SheltersRepository } from "../repository/shelters.repository";
import { UsersRepository } from "../repository/users.repository";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root',
})
export class SheltersService extends BaseService<Shelter> {
  constructor(
    private readonly sheltersRepository: SheltersRepository,
    private readonly shelterMediaRepository: ShelterMediaRepository,
    private readonly shelterSocialRepository: ShelterSocialRepository
  ) {
    super(sheltersRepository)
  }

  addMedia(media: ShelterMedia) {
    this.shelterMediaRepository.save(media)
  }

  updateMedia(id: number, media: ShelterMedia) {
    this.shelterMediaRepository.update(id, media)
  }

  removeMedia(id: number) {
    this.shelterMediaRepository.delete(id)
  }

  addSocial(social: ShelterSocial) {
    this.shelterSocialRepository.save(social)
  }

  updateSocial(id: number, social: ShelterSocial) {
    this.shelterSocialRepository.update(id, social)
  }

  removeSocial(id: number) {
    this.shelterSocialRepository.delete(id)
  }

}