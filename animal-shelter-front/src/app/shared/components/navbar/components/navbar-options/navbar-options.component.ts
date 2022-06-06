import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navbarOption } from 'src/app/common/interfaces/nabvar-option.interface';
import { navbarOptions } from 'src/app/common/models/navbar.model';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-options',
  templateUrl: './navbar-options.component.html',
})
export class NavbarOptionsComponent {

  options = navbarOptions
  icon = faLongArrowAltDown

  constructor(private readonly router: Router) { }

  moveToRoute(option: navbarOption) {
    if (!option.dropdownOptions)
      this.router.navigateByUrl(option.route as string)
  }

}
