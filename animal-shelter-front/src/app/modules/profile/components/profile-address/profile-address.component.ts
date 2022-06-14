import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';
import { CitiesService } from 'src/app/shared/services/cities.service';
import { ProfileActions } from 'src/app/state/core/profile/profile.action';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html',
})
export class ProfileAddressComponent extends Section implements OnInit {

  email!: string
  addresses!: Observable<Readonly<UserAddress[]>>

  constructor(
    private readonly state: Store<AppState>,
    private readonly cities: CitiesService
  ) {
    super()
  }

  ngOnInit(): void {
    this.state.select(ProfileSelectors.selectCurrentUser)
      .pipe(map((user) => user.email))
      .subscribe((email) => {
        this.email = email
      })
    this.addresses = this.state.select(ProfileSelectors.selectUserAddresses)
  }

  override addElement(addressToAdd: UserAddress): void {
    addressToAdd.userEmail = this.email
    const address = { ...addressToAdd }
    this.cities.getSpainCities().pipe(map((cities) => cities.find((city) => city.name === address.province))).subscribe((city) => {
      address.countryCode = city?.country_code as string
      address.stateCode = city?.state_code as string
      this.state.dispatch(ProfileActions.addAddressRequest({ address }))
      this.state.dispatch(ProfileActions.checkUserRequest())
      this.closeModal()
    })
  }

  override editElement(address: UserAddress): void {
    this.state.dispatch(ProfileActions.updateAddressRequest(
      { addressId: address.id, address }
    ))
    this.closeModal()
  }

  override removeElement(idAddress: any): void {
    this.state.dispatch(ProfileActions.deleteAddressRequest({ idAddress }))
    this.closeConfirmation()
  }
}