import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html'
})
export class LoginViewComponent implements OnInit {

  form: string = 'Login'
  constructor() { }

  ngOnInit(): void {
  }

  changeForm(selected: HTMLDivElement, unselected: HTMLDivElement) {
    selected.className = 'label primary'
    unselected.className = 'label'
    this.form = selected.innerText
  }

}
