import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  prevIcon = faChevronLeft
  nextIcon = faChevronRight
  @Input() images!: string[]
  element = 1

  ngOnInit(): void {
  }

  next(element: HTMLElement): any {
    if (this.element === 0) {
      element.style.marginLeft = '0px'
      return this.element++
    }
    if (this.element < 4) {
      element.style.marginLeft = `${(this.element * (-1000))}px`
      return this.element++
    } else {
      this.element = 0
      return this.next(element)
    }
  }

  prev(element: HTMLElement): any {
    if (this.element === 1) {
      this.element = 3
      this.next(element)
    } else {
      element.style.marginLeft = `${parseInt(element.style.marginLeft) + 1000}px`
      this.element--
    }
  }
}
