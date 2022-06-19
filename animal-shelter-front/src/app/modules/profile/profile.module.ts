import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRouting } from './profile-routing.module';
import { ProfileViewComponent } from './view/profile-view/profile-view.component';
import { ProfileAddressComponent } from './components/profile-address/profile-address.component';
import { ProfileSocialComponent } from './components/profile-social/profile-social.component';
import { ProfilePhoneComponent } from './components/profile-phone/profile-phone.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ProfileUserInfoComponent } from './components/profile-user-info/profile-user-info.component';
import { ProfileAdoptionsComponent } from './components/profile-adoptions/profile-adoptions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ModalPhoneComponent } from 'src/app/shared/components/modal-phone/modal-phone.component';
import { ModalAddressComponent } from 'src/app/shared/components/modal-address/modal-address.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { ModalImageComponent } from './components/profile-image/components/modal-image/modal-image.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ModalSocialComponent } from 'src/app/shared/components/modal-social/modal-social.component';
import { ModalPasswordComponent } from 'src/app/shared/components/modal-password/modal-password.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';



@NgModule({
  declarations: [
    ProfileViewComponent,
    ProfileAddressComponent,
    ProfileSocialComponent,
    ProfilePhoneComponent,
    ProfileImageComponent,
    ProfileUserInfoComponent,
    ProfileAdoptionsComponent,
    ModalConfirmationComponent,
    ModalPhoneComponent,
    ModalAddressComponent,
    ModalImageComponent,
    ModalSocialComponent,
    ModalPasswordComponent,
    BaseModalComponent
  ],
  imports: [
    CommonModule,
    ProfileRouting,
    FontAwesomeModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CdkAccordionModule,
    NgxMatSelectSearchModule,
    MaterialFileInputModule,
    MatSelectModule
  ]
})
export class ProfileModule { }
