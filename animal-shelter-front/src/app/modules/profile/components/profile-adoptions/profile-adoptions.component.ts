import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adoption } from 'src/app/shared/domain/interfaces/adoption.interface';

@Component({
  selector: 'app-profile-adoptions',
  templateUrl: './profile-adoptions.component.html'
})
export class ProfileAdoptionsComponent implements OnInit {

  @Input() adoptions?: Adoption[]

  constructor(
    private readonly route: Router
  ) { }

  ngOnInit(): void {
  }

  see(id: number) {
    this.route.navigateByUrl(`animals/${id}`)
  }
}