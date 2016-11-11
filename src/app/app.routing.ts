import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/stats/stats.module#StatsModule', path: 'stats' },
  { loadChildren: 'app/client/client.module#ClientModule', path: 'client' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false
  }
);
