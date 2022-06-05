import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navbarOption } from 'src/app/common/interfaces/nabvar-option.interface';

@Component({
  selector: 'dropdown-item',
  templateUrl: './dropdown-item.component.html'
})
export class DropdownItemComponent {
  @Input() item: navbarOption = { name: '' }

  constructor(private readonly router: Router) { }

  changeRoute() {
    this.router.navigateByUrl(this.item.route as string)
  }

}
