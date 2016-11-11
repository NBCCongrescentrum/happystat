import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { CommonModule } from '@angular/common';
import { routing } from './client.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ClientComponent
  ],
  bootstrap: [
    ClientComponent
  ]
})
export class ClientModule {}
