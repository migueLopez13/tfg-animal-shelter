import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-manteinance',
  templateUrl: './manteinance.component.html',
})
export class ManteinanceComponent implements OnInit {
  message =
    'Página en mantenimiento, por favor intentelo de nuevo en unas horas';

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
  }
}
