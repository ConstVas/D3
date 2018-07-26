import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaintComponent } from 'src/app/paint/paint.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { EnterAndExitComponent } from './enter-and-exit/enter-and-exit.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    RouterModule.forChild([
      { path: 'paint', component: PaintComponent },
      { path: 'dynamic', component: DynamicComponent },
      { path: 'enterAndExit', component: EnterAndExitComponent },
    ])
  ],
  declarations: [
    AppComponent,
    PaintComponent,
    DynamicComponent,
    EnterAndExitComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
