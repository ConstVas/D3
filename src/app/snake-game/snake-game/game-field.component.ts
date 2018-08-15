import { Component, AfterContentInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as d3 from 'd3';
import { Direction, Field } from '../snake-game.viewmodel';

@Component({
  selector: 'game-field',
  templateUrl: './game-field.component.html'
})
export class GameFieldComponent implements AfterContentInit {
  @ViewChild('field') field: ElementRef;

  public gameField: Field;

  public width = 1000;
  public height = 850;

  posX = 30;
  posY = 30;
  step = 10;
  direktion: Direction;

  timerId: any;

  tick = () => {
    switch (this.direktion) {
      case Direction.Up:
      this.posY = this.posY - this.step;
      this.snake.attr('cy', this.posY);
        if (this.posY < 10) {
          this.posY = 850;
        }
        break;
      case Direction.Down:
      this.posY = this.posY + this.step;
        this.snake.attr('cy', this.posY);
        if (this.posY > 850) {
          this.posY = 1;
        }
        break;
      case Direction.Left:
        this.posX = this.posX - this.step;
        this.snake.attr('cx', this.posX);
        if (this.posX < 1) {
          this.posX = 1000;
        }
        break;
      case Direction.Right:
        this.posX = this.posX + this.step;
        this.snake.attr('cx', this.posX);
        if (this.posX > 1000) {
          this.posX = 1;
        }
        break;

      default:
        break;
    }
    this.timerId = setTimeout(this.tick, 100);
  }

  get snake() {
    return d3.select('#snake');
  }

  constructor() {
    this.gameField = new Field();
    this.gameField.heigth = 850;
    this.gameField.width = 1000;
  }

  ngAfterContentInit() {
    this.initObjects();
    this.gameCircle();
  }

  gameCircle() {
    this.timerId = setTimeout(this.tick, 100);
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
