import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaintComponent } from './paint.component';

@NgModule({
  declarations: [
    PaintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaintComponent,
      }
  ])
  ],
  providers: []
})
export class PaintModule { }
