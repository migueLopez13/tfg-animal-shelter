import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faEye, faPencilAlt, faPlus, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Animal } from 'src/app/shared/domain/interfaces/animal.interface';
import { AnimalsSelectors } from 'src/app/state/core/animals/animals.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-animals-table',
  templateUrl: './animals-table.component.html'
})
export class AnimalsTableComponent implements OnInit {
  addIcon = faPlus
  showMoreIcon = faEye
  editIcon = faPencilAlt
  searchIcon = faSearch
  xIcon = faXmark
  animalsData = new MatTableDataSource<Readonly<Animal>>()
  isLoadingResults = false
  animalsColumns = [
    'id',
    'name',
    'birthdate',
    'gender',
    'kind',
    'breed',
    'size',
    'dewormed',
    'description',
    'arrived-at',
    'media',
    'vaccines',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly store: Store<AppState>
  ) { }


  ngOnInit(): void {
    this.store.select(AnimalsSelectors.selectAnimals).subscribe((animals) => {
      this.animalsData.data = animals as Readonly<Animal>[]
      console.log(animals)
    })
  }

  ngAfterViewInit(): void {
    this.animalsData.paginator = this.paginator;
    this.animalsData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.animalsData.filter = filterValue.trim().toLowerCase();
  }

  openAddAnimal() { }
}
