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
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { BaseModalComponent } from './components/modals/base-modal/base-modal.component';
import { ModalAddressComponent } from './components/modals/modal-address/modal-address.component';
import { ModalConfirmationComponent } from './components/modals/modal-confirmation/modal-confirmation.component';
import { ModalPasswordComponent } from './components/modals/modal-password/modal-password.component';
import { ModalPhoneComponent } from './components/modals/modal-phone/modal-phone.component';
import { ModalSocialComponent } from './components/modals/modal-social/modal-social.component';
import { ModalImageComponent } from './components/profile-image/components/modal-image/modal-image.component';




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
