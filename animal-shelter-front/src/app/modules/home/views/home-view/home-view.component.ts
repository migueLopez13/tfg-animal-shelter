import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html'
})
export class HomeViewComponent implements OnInit {

  images!: string[]

  constructor() { }

  ngOnInit(): void {
    this.images = [
      './../../../../assets/slider-1.jpg',
      './../../../../assets/slider-3.jpg',
      './../../../../assets/slider-4.webp',
      './../../../../assets/slider-5.jpeg',
    ]
  }

}
