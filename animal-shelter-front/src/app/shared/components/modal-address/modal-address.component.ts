import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { map, Observable, takeUntil } from 'rxjs';
import { City } from '../../domain/interfaces/city.interface';
import { UserAddress } from '../../domain/interfaces/user-address.interface';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-modal-address',
  templateUrl: './modal-address.component.html'
})
export class ModalAddressComponent implements OnInit {

  @Input() element?: UserAddress
  @Output() edit = new EventEmitter()
  @Output() add = new EventEmitter()
  @Output() close = new EventEmitter()

  addressForm!: FormGroup
  statesCodesFilterCtrl!: FormControl
  label!: FormControl
  province!: FormControl
  address!: FormControl
  zip!: FormControl

  filteredStatesCodes!: Observable<City[]>

  constructor(
    private readonly fb: FormBuilder,
    private readonly cities: CitiesService
  ) { }

  ngOnInit(): void {
    this.setControls()
    this.addressForm = this.fb.group(
      {
        id: '',
        label: this.label,
        countryCode: ' ',
        stateCode: '',
        province: this.province,
        address: this.address,
        zip: this.zip,
        userEmail: '',
      }
    )
    if (this.element) {
      this.setValues()
    }
    this.statesCodesFilterCtrl.valueChanges.subscribe((value) => {
      this.filteredStatesCodes = this.cities.getSpainCities().pipe(map(
        (city) => city.filter(({ name }) => name.includes(value))
      ))
    })
  }

  setControls() {
    this.label = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
    this.province = new FormControl(
      '', [Validators.required]
    );
    this.address = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
    this.zip = new FormControl(
      '', [Validators.required, Validators.pattern('^[0-9]{5}$')]
    );
    this.statesCodesFilterCtrl = new FormControl(
      '', [Validators.required]
    );
  }

  setValues() {
    this.addressForm.setValue(this.element as UserAddress)
  }

  closeModal() {
    this.close.emit()
  }
  editElement() {
    if (this.addressForm.valid)
      this.edit.emit(this.addressForm.value)
  }
  addElement() {
    if (this.addressForm.valid)
      this.add.emit(this.addressForm.value)
  }

  saveElement() {
    if (this.element) {
      return this.editElement()
    }
    return this.addElement()
  }
}
