import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Shelter } from 'src/app/shared/domain/interfaces/shelter.interface';
import { SheltersActions } from 'src/app/state/core/shelters/shelters.action';
import { SheltersSelectors } from 'src/app/state/core/shelters/shelters.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shelter-view',
  templateUrl: './shelter-view.component.html'
})
export class ShelterViewComponent implements OnInit, AfterViewInit {
  shelterEmail!: string
  shelter!: Readonly<Shelter>
  map!: Map
  @ViewChild('shelterMap', { static: true })
  shelterMap?: ElementRef<HTMLElement>;
  nextImage = faChevronCircleRight
  lastImage = faChevronCircleLeft

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.shelterEmail = this.router.snapshot.paramMap.get('id') as string

    this.store.dispatch(SheltersActions.loadShelterRequest({ shelterEmail: this.shelterEmail }))

    this.store.select(SheltersSelectors.selectShelterById(this.shelterEmail)).subscribe((shelter) => {
      this.shelter = shelter as Readonly<Shelter>
    })

  }

  ngAfterViewInit(): void {
    this.setupMap()
  }

  setupMap() {
    this.map = new Map({
      target: 'shelter-map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([0, 0]),
        zoom: 2
      })
    });
    setTimeout(() => {
      this.map.setView(new View({
        center: olProj.fromLonLat([this.shelter.longitude, this.shelter.latitude]),
        zoom: 19
      }))
    }, 1000);

  }
}
