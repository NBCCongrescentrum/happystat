import { NgModule } from '@angular/core';
import { StatsComponent } from './stats.component';
import { CommonModule } from '@angular/common';
import { routing } from './stats.routing';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    routing
  ],
  declarations: [
    StatsComponent
  ],
  bootstrap: [
    StatsComponent
  ]
})
export class StatsModule {}
