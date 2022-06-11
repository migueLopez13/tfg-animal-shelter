import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';

@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html',
})
export class ProfileAddressComponent implements OnInit {

  @Input() addresses?: UserAddress[]
  @Output() newAddress = new EventEmitter()
  @Output() editAddress = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
