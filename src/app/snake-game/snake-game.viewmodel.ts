import * as d3 from 'd3';

export class Game {
    player: Player;
    field: Field;
}

export class Player {
    name: string;
}

export class Field {
    heigth: number;
    width: number;

    objects: GameObject[];
}

export class GameObject {
  id: any;
  instance: any;
  previousPosition: FieldCoordinates;
  private _position: FieldCoordinates;
  set position(value: FieldCoordinates) {
    this.previousPosition = this._position;
    this._position = value;
    this.instance.attr('cx', value.x);
    this.instance.attr('cy', value.y);
  }
  get position(): FieldCoordinates {
    return this._position;
  }
  constructor(ins: any) {
    this.id = ins.attr('id');
    this.instance = ins;
    this.position = new FieldCoordinates(ins.attr('cx'), ins.attr('cy'));
  }
}

export class FieldCoordinates {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Snake {
  head: SnakeHead;
  body: SnakeBody[] = [];
  tail: SnakeTail;
  length: number;
  speed = 1;
  constructor(field: any, posX: number, posY: number) {
    const ins = d3.select(field)
                  .append('circle')
                  .attr('cx', posX)
                  .attr('id', 'snake')
                  .attr('cy', posY)
                  .attr('r', 10)
                  .attr('fill', 'red');
    this.head = new SnakeHead(ins);
    this.length = 0;
  }

  addBody(field: any) {
    if (this.length > 0) {
      this.body.push(new SnakeBody(field, this.body[this.body.length - 1]));
      this.body[this.body.length - 1].nextPartOfSnake = this.body[this.body.length];
    } else {
      this.body.push(new SnakeBody(field, this.head));
      this.head.nextPartOfSnake = this.body[this.body.length];
    }
    this.length++;
    this.speed += 2;
  }

  rotate(dir: Direction) {
    this.head.direction = dir;
  }

  move(pos: FieldCoordinates, dir: Direction) {
    this.rotate(dir);
    this.head.position = pos;
    if (this.length > 0) {
      for (const part of this.body) {
        part.position = part.previousPartOfSnake.previousPosition;
        part.direction = part.previousPartOfSnake.previousDirection;
      }
    }
  }

  destroy() {
    this.head.instance.remove();
    for (const part of this.body) {
      part.instance.remove();
    }
  }
}

export class OrientalGameObject extends GameObject {
    _direction: Direction;
    previousDirection: Direction;
    get direction(): Direction {
      return this._direction;
    }
    set direction(value: Direction) {
        this.previousDirection = this._direction;
        this._direction = value;
    }
}

export class SnakeBodyPart extends OrientalGameObject {}

export class SnakeHead extends SnakeBodyPart {
  nextPartOfSnake: SnakeBodyPart;
}

export class SnakeBody extends SnakeBodyPart {
  previousPartOfSnake: SnakeBodyPart;
  nextPartOfSnake: SnakeBodyPart;
  constructor(field: any, previousPart: SnakeBodyPart) {
    const ins = d3.select(field)
                    .append('circle')
                    .attr('cx', previousPart.previousPosition.x)
                    .attr('id', 'snake')
                    .attr('cy', previousPart.previousPosition.y)
                    .attr('r', 10)
                    .attr('fill', 'red');
    super(ins);
    this.direction = previousPart.previousDirection;
    this.previousPartOfSnake = previousPart;
  }
}

export class SnakeTail extends SnakeBodyPart {
  previousPartOfSnake: SnakeBodyPart;
}

export enum Direction {
    Up = 0,
    Right = 1,
    Down = 2,
    Left = 3
}

export class Food extends GameObject {
  constructor(field: any) {
    const ins = d3.select(field)
    .append('circle')
    .attr('id', 'food')
    .attr('fill', 'green')
    .attr('cx', Math.random() * 1000)
    .attr('cy', Math.random() * 850)
    .attr('r', 10);
    super(ins);
  }

  isExist() {
    return this.instance;
  }

  destroy() {
    this.instance.remove();
  }
}

export class Floor extends GameObject {

}
