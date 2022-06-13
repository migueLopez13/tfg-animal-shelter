import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-profile-adoptions',
  templateUrl: './profile-adoptions.component.html'
})
export class ProfileAdoptionsComponent implements OnInit {
  user = this.state.select(ProfileSelectors.selectCurrentUser)

  constructor(
    private readonly route: Router,
    private readonly state: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  see(id: number) {
    this.route.navigateByUrl(`animals/${id}`)
  }
}
