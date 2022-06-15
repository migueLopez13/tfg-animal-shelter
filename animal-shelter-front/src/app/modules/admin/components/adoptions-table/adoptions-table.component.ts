import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faEye, faPencilAlt, faPlus, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Adoption } from 'src/app/shared/domain/interfaces/adoption.interface';
import { AdoptionsSelectors } from 'src/app/state/core/adoptions/adoptions.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-adoptions-table',
  templateUrl: './adoptions-table.component.html'
})
export class AdoptionsTableComponent implements OnInit {

  addIcon = faPlus
  showMoreIcon = faEye
  editIcon = faPencilAlt
  searchIcon = faSearch
  xIcon = faXmark
  adoptionsData = new MatTableDataSource<Readonly<Adoption>>()
  isLoadingResults = false
  adoptionsColumns = [
    'id',
    'user',
    'animal',
    'date',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly store: Store<AppState>
  ) { }


  ngOnInit(): void {
    this.store.select(AdoptionsSelectors.selectAdoptions).subscribe(
      (adoptions) => {
        this.adoptionsData.data = adoptions as Readonly<Adoption>[]
      })
  }

  ngAfterViewInit(): void {
    this.adoptionsData.paginator = this.paginator;
    this.adoptionsData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.adoptionsData.filter = filterValue.trim().toLowerCase();
  }

  openAddAdoption() { }
}
