import { Component, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements AfterContentInit {
  ticks = 0;
  constructor() { }

  ngAfterContentInit() {
    const _this = this;
    let timerId = setTimeout(function tick() {
      _this.ticks++;
      timerId = setTimeout(tick, 1000);
    }, 1000);

    d3.selectAll('p').style('color', function() {
      return 'hsl(' + _this.ticks * 360 + ',100%,50%)';
    });

    // d3.selectAll('p').style('color', function(d, i) {
    //   return i % 2 ? '#fff' : '#eee';
    // });

    d3.selectAll('p')
  .data(_this.ticks)
    .style('font-size', function(d) { return d + 'px'; });
  }

}
