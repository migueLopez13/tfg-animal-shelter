import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manteinance',
  templateUrl: './manteinance.component.html',
  styleUrls: ['./manteinance.component.scss'],
})
export class ManteinanceComponent implements OnInit {
  message =
    'Página en mantenimiento, por favor intentelo de nuevo en unas horas';

  constructor() {}

  ngOnInit(): void {}
}
