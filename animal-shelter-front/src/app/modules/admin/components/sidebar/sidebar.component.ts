import { Component, OnInit } from '@angular/core';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { NavbarOption } from 'src/app/shared/domain/interfaces/nabvar-option.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  collapsed = true

  sidebarIcon = faAngleDoubleRight
  options: NavbarOption[] = [
    {
      name: 'Dashboard',
      route: '/admin/dashboard',
    },
    {
      name: 'Animals',
      route: '/admin/animals',
    },
    {
      name: 'Users',
      route: '/admin/users'
    },
    {
      name: 'Adoptions',
      route: '/admin/adoptions'
    },
    {
      name: 'Shelters',
      route: '/admin/shelters'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeCollapse() {
    if (this.collapsed) {
      this.sidebarIcon = faAngleDoubleLeft
      this.collapsed = false
    } else {
      this.sidebarIcon = faAngleDoubleRight
      this.collapsed = true
    }
  }
}
