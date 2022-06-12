import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserSocial } from 'src/app/shared/domain/interfaces/user-social.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-social',
  templateUrl: './profile-social.component.html'
})
export class ProfileSocialComponent extends Section<UserSocial>{
  constructor() {
    super()
  }
}