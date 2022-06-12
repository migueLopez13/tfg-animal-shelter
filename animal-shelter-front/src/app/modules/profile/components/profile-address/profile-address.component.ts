import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html',
})
export class ProfileAddressComponent extends Section<UserAddress>{
  constructor() {
    super()
  }
}