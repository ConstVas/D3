import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-enter-and-exit',
  templateUrl: './enter-and-exit.component.html',
  styleUrls: ['./enter-and-exit.component.css']
})
export class EnterAndExitComponent implements AfterContentInit {
  @ViewChild('enterAndExit') enterAndExit: ElementRef;
  public h5: any;


  constructor() {

   }

  ngAfterContentInit(): void {
    d3.select(this.enterAndExit.nativeElement)
    .selectAll('h5')
    .data([4, 8, 15, 16, 23, 42])
    .enter().append('h5')
      .text(function(d) { return 'I’m number ' + d + '!'; });

      this.h5 = d3.select(this.enterAndExit.nativeElement)
      .selectAll('h5')
      .data([4, 8, 15, 16, 23, 42])
        .text(function(d) { return d; });
        
  }

  Enter() {
    this.h5.enter().append('h5')
    .text(function(d) { return d; });
  }

  Exit() {
    this.h5.exit().remove();
  }
}
