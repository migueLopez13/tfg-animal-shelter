import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html'
})
export class LoginViewComponent implements OnInit {

  form: string = 'Login'
  constructor(private readonly route: Router) { }

  ngOnInit(): void {
  }

  changeForm(selected: HTMLDivElement, unselected: HTMLDivElement) {
    selected.className = 'label primary'
    unselected.className = 'label'
    this.form = selected.innerText
  }

  goHome() {
    this.route.navigateByUrl('home')
  }
}
