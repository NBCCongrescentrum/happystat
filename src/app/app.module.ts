import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StatsService } from './services/stats.service';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { feedReducer } from './store/feed/feed.reducer';
import { FeedEffects } from './store/feed/feed.effects';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    StoreModule.provideStore({
      feed: feedReducer
    }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    EffectsModule.run(FeedEffects),
    StoreLogMonitorModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    StatsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
