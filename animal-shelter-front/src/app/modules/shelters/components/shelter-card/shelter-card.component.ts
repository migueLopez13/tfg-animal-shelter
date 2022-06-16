import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shelter } from 'src/app/shared/domain/interfaces/shelter.interface';

@Component({
  selector: 'app-shelter-card',
  templateUrl: './shelter-card.component.html'
})
export class ShelterCardComponent {

  @Input() shelter !: Readonly<Shelter>

  constructor(private readonly router: Router) { }

  showMore() {
    this.router.navigateByUrl(`shelters/${this.shelter.email}`)
  }
}
