import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarOption } from 'src/app/shared/domain/interfaces/nabvar-option.interface';

@Component({
  selector: 'dropdown-item',
  templateUrl: './dropdown-item.component.html'
})
export class DropdownItemComponent {
  @Input() item: NavbarOption = { name: '' }

  constructor(private readonly router: Router) { }

  changeRoute() {
    this.router.navigateByUrl(this.item.route as string)
  }

}
