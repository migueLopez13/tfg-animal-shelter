import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AnimalData } from 'src/app/common/interfaces/card-data.interface';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export interface FilterPagination {
  pageNumber: number,
  elementsPerPage: number,
  totalPages: number,
  list?: Observable<AnimalData[]>
}

@Component({
  selector: 'app-pagination-filter',
  templateUrl: './pagination-filter.component.html'
})
export class PaginationFilterComponent implements OnInit {

  @Input() elementsPerPage!: number
  @Input() elements!: Observable<AnimalData[]>
  @Output() change = new EventEmitter()

  paginationFilter!: FilterPagination

  lastIcon = faChevronLeft
  nextIcon = faChevronRight


  constructor() { }

  ngOnInit(): void {
    this.paginationFilter = {
      pageNumber: 0,
      elementsPerPage: this.elementsPerPage,
      totalPages: 1
    }
    this.pagination()
    this.emit()
  }

  pagination() {
    this.paginationFilter.list =
      this.elements.pipe(map((elements) => {
        const start =
          this.paginationFilter.elementsPerPage * this.paginationFilter.pageNumber

        const end =
          start + this.paginationFilter.elementsPerPage >= elements.length
            ? elements.length
            : start + this.paginationFilter.elementsPerPage

        this.paginationFilter.totalPages = Math.ceil(elements.length / this.paginationFilter.elementsPerPage)

        return elements.slice(start, end)
      }))
  }

  nextPage() {
    this.paginationFilter.totalPages - 1 > this.paginationFilter.pageNumber
      ? this.paginationFilter.pageNumber++
      : this.paginationFilter.pageNumber
    this.pagination()
    this.emit()
  }

  lastPage() {
    this.paginationFilter.pageNumber > 0
      ? this.paginationFilter.pageNumber--
      : this.paginationFilter.pageNumber = 0
    this.pagination()
    this.emit()
  }

  selectPage(index: number) {
    this.paginationFilter.pageNumber = index;

    this.pagination()
    this.emit()
  }

  emit() {
    return this.change.emit(this.paginationFilter.list)
  }

}
