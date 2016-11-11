import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StatsComponent } from './stats.component';

const routes: Route[] = [
  {
    path: '',
    component: StatsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
