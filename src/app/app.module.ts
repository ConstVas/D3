import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaintComponent } from 'src/app/paint/paint.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    RouterModule.forChild([
      { path: 'paint', component: PaintComponent },
      { path: 'dynamic', component: DynamicComponent }
    ])
  ],
  declarations: [
    AppComponent,
    PaintComponent,
    DynamicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
