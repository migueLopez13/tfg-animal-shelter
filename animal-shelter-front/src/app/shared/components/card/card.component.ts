import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalData } from 'src/app/common/interfaces/card-data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() AnimalData!: AnimalData

  constructor(private readonly router: Router) {
  }

  showMore() {
    if (this.AnimalData.route) {
      const url = this.AnimalData.route;
      this.router.navigateByUrl(url)
    }
  }
}
