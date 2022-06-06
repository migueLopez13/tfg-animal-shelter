import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardData } from 'src/app/common/interfaces/card-data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() cardData!: CardData

  constructor(private readonly router: Router) {
  }

  showMore() {
    if (this.cardData.route) {
      const url = this.cardData.route;
      this.router.navigateByUrl(url)
    }
  }
}
