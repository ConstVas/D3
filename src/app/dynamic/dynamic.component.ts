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


    // d3.selectAll('p').style('color', function(d, i) {
    //   return i % 2 ? '#fff' : '#eee';
    // });


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

// @Component({
//   selector: 'app-dynamic',
//   templateUrl: './dynamic.component.html',
//   styleUrls: ['./dynamic.component.css']
// })
// export class Dynamic1Component implements AfterContentInit {
//   ticks = 0;
//   constructor() { }

//   ngAfterContentInit() {
//     const _this = this;
//     let timerId = setTimeout(function tick() {
//       _this.ticks++;
//       timerId = setTimeout(tick, 1000);
//     }, 1000);

//     d3.selectAll('p').style('color', function() {
//       return 'hsl(' + _this.ticks * 360 + ',100%,50%)';
//     });

//     d3.selectAll('p')
//     .data(_this.ticks)
//     .style('font-size', function(d) { return d + 'px'; });
//   }

// }
