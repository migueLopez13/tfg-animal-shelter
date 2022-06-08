import { Component, Input, OnInit } from '@angular/core';
import { NavbarOption } from 'src/app/shared/domain/interfaces/nabvar-option.interface';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {

  @Input() list?: NavbarOption[]

  constructor() { }

  ngOnInit(): void {
  }

}
