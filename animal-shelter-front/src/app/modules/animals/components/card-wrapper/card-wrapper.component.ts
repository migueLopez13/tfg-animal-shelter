import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalData } from 'src/app/common/interfaces/card-data.interface';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent {
  @Input() cards: Observable<AnimalData[]> | null = null

  constructor() { }

}
