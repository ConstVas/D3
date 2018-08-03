import { Component, AfterContentInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as d3 from 'd3';
import { Direction } from '../snake-game.viewmodel';

@Component({
  selector: 'game-field',
  templateUrl: './game-field.component.html'
})
export class GameFieldComponent implements AfterContentInit {
  @ViewChild('field') field: ElementRef;

  posX: number = 30;
  posY: number = 30;
  step: number = 10;
  direktion: Direction;

  get snake() {
    return d3.select('#snake');
  }

  constructor() { }

  ngAfterContentInit() {
    this.initObjects();
    var this__ = this;
    let timerId = setTimeout(function tick() {
      switch (this__.direktion) {
        case Direction.Up:
          this__.posY = this__.posY - this__.step;
          this__.snake.attr('cy', this__.posY);
          if (this__.posY < 10) { 
            this__.posY = 850;
          }
          break;
        case Direction.Down:
          this__.posY = this__.posY + this__.step;
          this__.snake.attr('cy', this__.posY);
          if (this__.posY > 850) { 
            this__.posY = 1;
          }
          break;
        case Direction.Left:
          this__.posX = this__.posX - this__.step;
          this__.snake.attr('cx', this__.posX);
          if (this__.posX < 1) { 
            this__.posX = 1000;
          }
          break;
        case Direction.Right:
          this__.posX = this__.posX + this__.step;
          this__.snake.attr('cx', this__.posX);
          if (this__.posX > 1000) { 
            this__.posX = 1;
          }
          break;

        default:
          break;
      }
      timerId = setTimeout(tick, 100);
    }, 100);
  }

  initObjects() {
    this.initField();
    this.initSnake();
  }

  initField() {
    d3.select(this.field.nativeElement).style('background-color', 'black');
  }

  initSnake() {
    d3.select(this.field.nativeElement)
      .append('circle')
      .attr('cx', this.posX)
      .attr('id', 'snake')
      .attr('cy', this.posY)
      .attr('r', 10)
      .attr('fill', 'red');
  }



  moveSnake(event) {
    switch (event.key) {
      case 'w':
        console.log('UP');
        this.direktion = Direction.Up;
        this.posY = this.posY - this.step;
        this.snake.attr('cy', this.posY);
        break;
      case 'a':
        console.log('LEFT');
        this.direktion = Direction.Left;
        this.posX = this.posX - this.step;
        this.snake.attr('cx', this.posX);
        break;
      case 'd':
        console.log('RIGHT');
        this.direktion = Direction.Right;
        this.posX = this.posX + this.step;
        this.snake.attr('cx', this.posX);
        break;
      case 's':
        console.log('DOWN');
        this.direktion = Direction.Down;
        this.posY = this.posY + this.step;
        this.snake.attr('cy', this.posY);
        break;

      default:
        break;
    }
  }
}
