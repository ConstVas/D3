import { Component, AfterContentInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as d3 from 'd3';
import { Direction, Field, Snake } from '../snake-game.viewmodel';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game-field',
  templateUrl: './game-field.component.html'
})
export class GameFieldComponent implements AfterContentInit {
  @ViewChild('field') field: ElementRef;

  public gameField: Field;
  public snake: Snake;

  public width = 1000;
  public height = 850;
  snakeLength = 0;

  foodExist = false;

  posX = 30;
  posY = 30;
  step = 10;
  direktion: Direction;

  timerId: any;

  tick = () => {
    switch (this.direktion) {
      case Direction.Up:
      this.posY = this.posY - this.step;
      this.snake.position.y = this.posY; // attr('cy', this.posY);
        if (this.posY < 10) {
          this.posY = 850;
        }
        break;
      case Direction.Down:
      this.posY = this.posY + this.step;
      this.snake.position.y = this.posY;
        if (this.posY > 850) {
          this.posY = 1;
        }
        break;
      case Direction.Left:
        this.posX = this.posX - this.step;
        this.snake.position.x = this.posX;
        if (this.posX < 1) {
          this.posX = 1000;
        }
        break;
      case Direction.Right:
        this.posX = this.posX + this.step;
        this.snake.position.x = this.posX;
        if (this.posX > 1000) {
          this.posX = 1;
        }
        break;

      default:
        break;
    }
    if (this.isSnakeEatFood()) {
      this.food.remove();
      this.foodExist = false;
      this.addFood();
      this.growSnake();
    }
    this.timerId = setTimeout(this.tick, 100);
  }

  growSnake() {
    d3.select(this.field.nativeElement)
      .append('circle')
      .attr('cx', this.snake.position.x)
      .attr('id', 'snakeBody' + this.snakeLength)
      .attr('cy', this.snake.position.y)
      .attr('r', 10)
      .attr('fill', 'red');
    this.snakeLength++;
  }

  isSnakeEatFood() {
    if (!this.food) {
      return false;
    }
    if (Math.abs(this.snake.position.x - this.food.attr('cx')) < 10 && Math.abs(this.snake.position.y - this.food.attr('cy')) < 10) {
      return true;
    }
    return false;
  }

  // get snake() {
  //   return d3.select('#snake');
  // }

  get food() {
    return d3.select('#food');
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
    this.addFood();
  }

  addFood() {
    if (!this.foodExist) {
       d3.select(this.field.nativeElement)
         .append('circle')
         .attr('id', 'food')
         .attr('fill', 'green')
         .attr('cx', Math.random() * 1000)
         .attr('cy', Math.random() * 850)
         .attr('r', 10);
         this.foodExist = true;
    }
  }

  initObjects() {
    this.initField();
    this.initSnake();
  }

  initField() {
    d3.select(this.field.nativeElement).style('background-color', 'black');
  }

  initSnake() {
    this.snake = new Snake(this.field.nativeElement, this.posX, this.posY);
  }



  moveSnake(event) {
    switch (event.key) {
      case 'w':
        console.log('UP');
        this.direktion = Direction.Up;
        this.posY = this.posY - this.step;
        this.snake.position.y = this.posY;
        break;
      case 'a':
        console.log('LEFT');
        this.direktion = Direction.Left;
        this.posX = this.posX - this.step;
        this.snake.position.x = this.posX;
        break;
      case 'd':
        console.log('RIGHT');
        this.direktion = Direction.Right;
        this.posX = this.posX + this.step;
        this.snake.position.x = this.posX;
        break;
      case 's':
        console.log('DOWN');
        this.direktion = Direction.Down;
        this.posY = this.posY + this.step;
        this.snake.position.y = this.posY;
        break;

      default:
        break;
    }
  }
}
