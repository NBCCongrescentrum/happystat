import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { CommonModule } from '@angular/common';
import { routing } from './client.routing';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MaterialModule.forRoot()
  ],
  declarations: [
    ClientComponent
  ],
  bootstrap: [
    ClientComponent
  ]
})
export class ClientModule {}
