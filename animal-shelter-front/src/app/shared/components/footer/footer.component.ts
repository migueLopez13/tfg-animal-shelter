import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  license = 'MIT License'
  author = 'MigueLopez13'
  github = 'https://github.com/migueLopez13'

  constructor() { }

}
