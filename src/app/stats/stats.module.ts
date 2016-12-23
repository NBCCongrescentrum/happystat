import { NgModule } from '@angular/core';
import { StatsComponent } from './stats.component';
import { CommonModule } from '@angular/common';
import { routing } from './stats.routing';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
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
