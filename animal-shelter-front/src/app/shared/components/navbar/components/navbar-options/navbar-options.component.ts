import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarOption } from 'src/app/shared/domain/interfaces/nabvar-option.interface';
import { navbarOptions } from 'src/app/shared/domain/models/navbar.model';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-options',
  templateUrl: './navbar-options.component.html',
})
export class NavbarOptionsComponent {

  options = navbarOptions
  icon = faLongArrowAltDown

  constructor(private readonly router: Router) { }

  moveToRoute(option: NavbarOption) {
    if (!option.dropdownOptions)
      this.router.navigateByUrl(option.route as string)
  }

}
