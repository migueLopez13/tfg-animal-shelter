import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AnimalsComponent } from './views/animals/animals.component';
import { AdoptionsComponent } from './views/adoptions/adoptions.component';
import { SheltersComponent } from './views/shelters/shelters.component';
import { UsersComponent } from './views/users/users.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { GraphComponent } from './components/graph/graph.component';
import {
  IgxDoughnutChartModule,
  IgxRingSeriesModule,
  IgxLegendModule,
  IgxItemLegendModule
} from "igniteui-angular-charts";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    DashboardComponent,
    AnimalsComponent,
    AdoptionsComponent,
    SheltersComponent,
    UsersComponent,
    BaseTableComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    FormsModule,
    IgxDoughnutChartModule,
    IgxRingSeriesModule,
    IgxLegendModule,
    IgxItemLegendModule
  ]
})
export class AdminModule { }
