import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRouting } from './profile-routing.module';
import { ProfileViewComponent } from './view/profile-view/profile-view.component';
import { ProfileAddressComponent } from './components/profile-address/profile-address.component';
import { ProfileSocialComponent } from './components/profile-social/profile-social.component';
import { ProfilePhoneComponent } from './components/profile-phone/profile-phone.component';
import { ProfileModalAvatarComponent } from './components/profile-modal-avatar/profile-modal-avatar.component';



@NgModule({
  declarations: [
  
    ProfileViewComponent,
       ProfileAddressComponent,
       ProfileSocialComponent,
       ProfilePhoneComponent,
       ProfileModalAvatarComponent
  ],
  imports: [
    CommonModule,
    ProfileRouting
  ]
})
export class ProfileModule { }
