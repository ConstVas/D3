import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaintComponent } from './paint/paint.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { EnterAndExitComponent } from './enter-and-exit/enter-and-exit.component';
import { MetanitExamplesComponent } from './metanit-examples/metanit-examples.component';
import { GameFieldComponent } from './snake-game/snake-game/game-field.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([], {useHash: false}),
    RouterModule.forChild([
      { path: 'paint', component: PaintComponent },
      { path: 'dynamic', component: DynamicComponent },
      { path: 'enterAndExit', component: EnterAndExitComponent },
      { path: 'metanitExamples', component: MetanitExamplesComponent },
      { path: 'snake', component: GameFieldComponent },
    ])
  ],
  declarations: [
    AppComponent,
    PaintComponent,
    GameFieldComponent,
    DynamicComponent,
    EnterAndExitComponent,
    MetanitExamplesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
