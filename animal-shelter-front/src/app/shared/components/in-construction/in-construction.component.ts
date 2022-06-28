import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-construction',
  templateUrl: './in-construction.component.html',
})
export class InConstructionComponent implements OnInit {
  message =
    'Página en construccion, estamos trabajando en ello.';

  constructor() { }

  async ngOnInit(): Promise<void> {
  }
}
