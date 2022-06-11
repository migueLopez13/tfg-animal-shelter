import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserSocial } from 'src/app/shared/domain/interfaces/user-social.interface';

@Component({
  selector: 'app-profile-social',
  templateUrl: './profile-social.component.html'
})
export class ProfileSocialComponent implements OnInit {

  @Input() socialMedia?: UserSocial[]
  @Output() newSocial = new EventEmitter()
  @Output() editPSocial = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

}
