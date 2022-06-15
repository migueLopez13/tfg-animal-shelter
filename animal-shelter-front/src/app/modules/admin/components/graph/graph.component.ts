import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartData, ChartEvent, ChartType, Chart, ChartItem } from 'chart.js';
import { AdoptionsSelectors } from 'src/app/state/core/adoptions/adoptions.selectors';
import { AnimalsSelectors } from 'src/app/state/core/animals/animals.selectors';
import { SheltersSelectors } from 'src/app/state/core/shelters/shelters.selectors';
import { UsersSelectors } from 'src/app/state/core/users/users.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas?: ElementRef<HTMLCanvasElement>;
  myChart!: Chart
  data = new Array<number>(4)

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.setDataArray()
  }

  ngAfterViewInit(): void {
    const ctx = this.canvas?.nativeElement.getContext('2d')
    this.myChart = new Chart(ctx as any, {
      type: 'doughnut',
      data: {
        labels: ['Animals', 'Shelters', 'Users', 'Adoptions',],
        datasets: [{
          label: '# of Votes',
          data: this.data,
          backgroundColor: [
            '#173563',
            '#96dbf6',
            '#eca400',
            '#d93025',
          ],
          hoverBackgroundColor: [
            '#173563',
            '#96dbf6',
            '#eca400',
            '#d93025',
          ],
          borderColor: [
            '#828282',
          ],
          hoverBorderColor: [
            '#828282',
          ],
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 25
              },
              color: 'white'
            }
          }
        }
      }
    });

    setTimeout(() => {
      this.myChart.update("show")
    }, 2500);
  }

  setDataArray() {
    this.store.select(AnimalsSelectors.selectAnimals).subscribe((animals => { this.data[0] = animals.length }))

    this.store.select(SheltersSelectors.selectShelters).subscribe((shelter => { this.data[1] = shelter.length }))

    this.store.select(UsersSelectors.selectUsers).subscribe((users => { this.data[2] = users.length }))

    this.store.select(AdoptionsSelectors.selectAdoptions).subscribe((adoptions => {
      this.data[3] = adoptions.length
    }))
  }

}
