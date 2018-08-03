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
      _this.setColor(_this.ticks);
      _this.setSize(_this.ticks);
      _this.ticks++;
      timerId = setTimeout(tick, 100);
    }, 100);
  }

  setColor(seed: any) {
    d3.selectAll('p').style('color', function() {
      return 'hsl(' + seed * 10 + ',100%,50%)';
    });
  }

  setSize(seed: any) {
    d3.selectAll('p')
    .data([seed, seed])
    .style('font-size', function(d) {
      return 100 - Math.sin(d / 16 * Math.PI) * 50  + 'px';
    });
  }
}
