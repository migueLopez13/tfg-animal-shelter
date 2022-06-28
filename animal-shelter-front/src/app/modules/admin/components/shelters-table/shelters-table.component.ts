import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faEye, faPencilAlt, faPlus, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Shelter } from 'src/app/shared/domain/interfaces/shelter.interface';
import { SheltersSelectors } from 'src/app/state/core/shelters/shelters.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-shelters-table',
  templateUrl: './shelters-table.component.html'
})
export class SheltersTableComponent implements OnInit {
  addIcon = faPlus
  showMoreIcon = faEye
  editIcon = faPencilAlt
  searchIcon = faSearch
  xIcon = faXmark
  sheltersData = new MatTableDataSource<Readonly<Shelter>>()
  isLoadingResults = false
  sheltersColumns = [
    'email',
    'name',
    'description',
    'phone',
    'media',
    'social',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly store: Store<AppState>
  ) { }


  ngOnInit(): void {
    this.store.select(SheltersSelectors.selectShelters).subscribe((shelter) => {
      this.sheltersData.data = shelter as Readonly<Shelter>[]
    })
  }

  ngAfterViewInit(): void {
    this.sheltersData.paginator = this.paginator;
    this.sheltersData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sheltersData.filter = filterValue.trim().toLowerCase();
  }

  openAddShelter() { }
}
