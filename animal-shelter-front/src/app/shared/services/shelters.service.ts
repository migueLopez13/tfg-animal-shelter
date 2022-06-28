import { Injectable } from "@angular/core";
import { ShelterMedia } from "src/app/shared/domain/interfaces/shelter-media.interface";
import { ShelterSocial } from "src/app/shared/domain/interfaces/shelter-social.interface";
import { Shelter } from "src/app/shared/domain/interfaces/shelter.interface";
import { User } from "src/app/shared/domain/interfaces/user.interface";
import { ShelterMediaRepository } from "./repository/shelter-media.repository";
import { ShelterSocialRepository } from "./repository/shelter-social.repository";
import { SheltersRepository } from "./repository/shelters.repository";
import { UsersRepository } from "./repository/users.repository";
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
    return this.shelterMediaRepository.save(media)
  }

  updateMedia(id: number, media: ShelterMedia) {
    return this.shelterMediaRepository.update(id, media)
  }

  removeMedia(id: number) {
    return this.shelterMediaRepository.delete(id)
  }

  addSocial(social: ShelterSocial) {
    return this.shelterSocialRepository.save(social)
  }

  updateSocial(id: number, social: ShelterSocial) {
    return this.shelterSocialRepository.update(id, social)
  }

  removeSocial(id: number) {
    return this.shelterSocialRepository.delete(id)
  }

}