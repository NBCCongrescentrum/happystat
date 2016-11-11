import { NgModule } from '@angular/core';
import { StatsComponent } from './stats.component';
import { CommonModule } from '@angular/common';
import { routing } from './stats.routing';

@NgModule({
  imports: [
    CommonModule,
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
