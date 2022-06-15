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
      name: 'Animals',
      route: '',
    },
    {
      name: 'Users',
      route: ''
    },
    {
      name: 'Adoptions',
      route: ''
    },
    {
      name: 'Shelters',
      route: ''
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
