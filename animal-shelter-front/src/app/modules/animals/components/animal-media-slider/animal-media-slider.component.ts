import { Component, Input, OnInit } from '@angular/core';
import { AnimalMedia } from 'src/app/shared/domain/interfaces/animal-media.interface';

@Component({
  selector: 'app-animal-media-slider',
  templateUrl: './animal-media-slider.component.html'
})
export class AnimalMediaSliderComponent implements OnInit {

  @Input() images?: AnimalMedia[]

  constructor() { }

  ngOnInit(): void {
  }

}
