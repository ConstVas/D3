import { Component, AfterContentInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class GameService {
  @ViewChild('field') field: ElementRef;

  constructor() { }

  ngAfterContentInit() {
    this.initField();
    this.initSnake();
  }

  initField() {
    d3.select(this.field.nativeElement).style('background-color', 'black');
  }

  initSnake() {
    
  }

}
