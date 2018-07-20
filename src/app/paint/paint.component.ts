import { Component, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements AfterContentInit {
  @ViewChild('paint') paint: ElementRef;

  radius = 10;

  ngAfterContentInit() {
    d3.select(this.paint.nativeElement).style('background-color', 'black');
  }

  clicked(event: any) {
    d3.select(event.target)
    .append('circle')
    .attr('cx', event.x - 10)
    .attr('cy', event.y - 30)
    .attr('r', this.radius)
    .attr('fill', 'red');
  }
}
