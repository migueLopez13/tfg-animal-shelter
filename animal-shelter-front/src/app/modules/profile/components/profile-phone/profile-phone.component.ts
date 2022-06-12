import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-phone',
  templateUrl: './profile-phone.component.html'
})
export class ProfilePhoneComponent extends Section<UserPhone>{
  constructor() {
    super()
  }
}
