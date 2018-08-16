import { Component, AfterContentInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as d3 from 'd3';
import { Direction, Field, Snake, Food, FieldCoordinates } from '../snake-game.viewmodel';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game-field',
  templateUrl: './game-field.component.html'
})
export class GameFieldComponent implements AfterContentInit {
  @ViewChild('field') field: ElementRef;

  public gameField: Field;
  public snake: Snake;
  public food: Food;

  public width = 1000;
  public height = 850;
  snakeLength = 0;

  foodExist = false;

  posX = 30;
  posY = 30;
  step = 10;
  direction: Direction;
  tickspeed = 100;
  score = 0;

  timerId: any;

  constructor() {
    this.gameField = new Field();
    this.gameField.heigth = 850;
    this.gameField.width = 1000;
  }

  tick = () => {
    switch (this.direction) {
      case Direction.Up:
      this.snake.rotate(Direction.Up);
      this.posY = this.posY - this.step;
      this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
      this.snake.head.direction = Direction.Up;
        if (this.posY < 10) {
          this.posY = 850;
        }
        break;
      case Direction.Down:
      this.posY = this.posY + this.step;
      this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
        if (this.posY > 850) {
          this.posY = 1;
        }
        break;
      case Direction.Left:
        this.posX = this.posX - this.step;
        this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
        if (this.posX < 1) {
          this.posX = 1000;
        }
        break;
      case Direction.Right:
        this.posX = this.posX + this.step;
        this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
        if (this.posX > 1000) {
          this.posX = 1;
        }
        break;

      default:
        break;
    }
    if (this.isSnakeEatFood()) {
      this.food.destroy();
      this.addFood();
      this.growSnake();
    }
    if (this.isSnakeEatSelf()) {
      this.snake.destroy();
      this.initSnake();
      this.score = 0;
    }
    this.timerId = setTimeout(this.tick, this.tickspeed - this.snake.speed);
  }

  growSnake() {
    this.snake.addBody(this.field.nativeElement);
  }

  isSnakeEatFood() {
    if (!this.food.isExist) {
      return false;
    }
    if (Math.abs(this.snake.head.position.x - this.food.position.x) < 10
    && Math.abs(this.snake.head.position.y - this.food.position.y) < 10) {
      console.log('score = ' + this.score++);
      console.log('speed = ' + this.snake.speed);
      return true;
    }
    return false;
  }

  isSnakeEatSelf() {
    for (const part of this.snake.body) {
      if (Math.abs(this.snake.head.position.x - part.position.x) < 10
      && Math.abs(this.snake.head.position.y - part.position.y) < 10) {
        return true;
      }
    }
  }

  ngAfterContentInit() {
    this.initObjects();
    this.gameCircle();
  }

  gameCircle() {
    this.timerId = setTimeout(this.tick, this.tickspeed - this.snake.speed);
    if (!this.foodExist) {
      this.addFood();
    }
  }

  addFood() {
    this.food = new Food(this.field.nativeElement);
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
        this.direction = Direction.Up;
        this.posY = this.posY - this.step;
        this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
        break;
      case 'a':
        this.direction = Direction.Left;
        this.posX = this.posX - this.step;
        this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
        break;
      case 'd':
        this.direction = Direction.Right;
        this.posX = this.posX + this.step;
        this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
        break;
      case 's':
        this.direction = Direction.Down;
        this.posY = this.posY + this.step;
        this.snake.move(new FieldCoordinates(this.posX, this.posY), this.direction);
        break;

      default:
        break;
    }
  }
}
