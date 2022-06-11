import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';

@Component({
  selector: 'app-profile-phone',
  templateUrl: './profile-phone.component.html'
})
export class ProfilePhoneComponent implements OnInit {

  @Input() phones?: UserPhone[]
  @Output() newPhone = new EventEmitter()
  @Output() editPhone = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
