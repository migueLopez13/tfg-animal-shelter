import { Component, Input, OnInit } from '@angular/core';
import { navbarOption } from 'src/app/common/interfaces/nabvar-option.interface';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {

  @Input() list?: navbarOption[]

  constructor() { }

  ngOnInit(): void {
  }

}
