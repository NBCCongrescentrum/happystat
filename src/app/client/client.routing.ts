import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ClientComponent } from './client.component';

const routes: Route[] = [
  {
    path: '',
    component: ClientComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
