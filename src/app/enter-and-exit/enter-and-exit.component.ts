import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-enter-and-exit',
  templateUrl: './enter-and-exit.component.html',
  styleUrls: ['./enter-and-exit.component.css']
})
export class EnterAndExitComponent implements AfterContentInit {

  public p: any;


  constructor() {
    this.p = d3.select('body')
    .selectAll('p')
    .data([4, 8, 15, 16, 23, 42])
      .text(function(d) { return d; });
   }

  ngAfterContentInit(): void {
    d3.select('body')
    .selectAll('p')
    .data([4, 8, 15, 16, 23, 42])
    .enter().append('p')
      .text(function(d) { return 'I’m number ' + d + '!'; });
  }

  Enter() {
    this.p.enter().append('p')
    .text(function(d) { return d; });
  }

  Exit() {
    this.p.exit().remove();
  }
}
