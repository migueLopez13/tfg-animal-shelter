import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AnimalsComponent } from './views/animals/animals.component';
import { AdoptionsComponent } from './views/adoptions/adoptions.component';
import { SheltersComponent } from './views/shelters/shelters.component';
import { UsersComponent } from './views/users/users.component';
import { GraphComponent } from './components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdoptionsTableComponent } from './components/adoptions-table/adoptions-table.component';
import { AnimalsTableComponent } from './components/animals-table/animals-table.component';
import { SheltersTableComponent } from './components/shelters-table/shelters-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminModalUsersComponent } from './components/modals/admin-modal-users/admin-modal-users.component';
import { AdminModalAnimalsComponent } from './components/modals/admin-modal-animals/admin-modal-animals.component';
import { AdminModalAdoptionsComponent } from './components/modals/admin-modal-adoptions/admin-modal-adoptions.component';
import { AdminModalSheltersComponent } from './components/modals/admin-modal-shelters/admin-modal-shelters.component';
import { AdminModalPhonesComponent } from './components/modals/admin-modal-phones/admin-modal-phones.component';
import { AdminModalSocialComponent } from './components/modals/admin-modal-social/admin-modal-social.component';
import { AdminModalAddressesComponent } from './components/modals/admin-modal-addresses/admin-modal-addresses.component';
import { AdminModalMediaComponent } from './components/modals/admin-modal-media/admin-modal-media.component';
import { BaseModalComponent } from './components/modals/base-modal/base-modal.component';
import { ModalConfirmationComponent } from './components/modals/modal-confirmation/modal-confirmation.component';
import { ModalManageSocialComponent } from './components/modals/modal-manage-social/modal-manage-social.component';
import { ModalManagePhoneComponent } from './components/modals/modal-manage-phone/modal-manage-phone.component';
import { ModalManageAddressComponent } from './components/modals/modal-manage-address/modal-manage-address.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AnimalsComponent,
    AdoptionsComponent,
    SheltersComponent,
    UsersComponent,
    GraphComponent,
    SidebarComponent,
    UsersTableComponent,
    AdoptionsTableComponent,
    AnimalsTableComponent,
    SheltersTableComponent,
    AdminModalAnimalsComponent,
    AdminModalAdoptionsComponent,
    AdminModalSheltersComponent,
    AdminModalUsersComponent,
    AdminModalSocialComponent,
    AdminModalPhonesComponent,
    AdminModalAddressesComponent,
    AdminModalMediaComponent,
    BaseModalComponent,
    ModalConfirmationComponent,
    ModalManageSocialComponent,
    ModalManagePhoneComponent,
    ModalManageAddressComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    FontAwesomeModule,
    NgChartsModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class AdminModule { }
