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
    constructor(ins: any) {
      this.id = ins.attr('id');
      this.instance = ins;
      this.position = new FieldPosition(ins);
    }
    id: any;
    instance: any;
    position: FieldPosition;
}

export class FieldPosition {
  constructor(private instance: any) {}
  set x(value: number) {
    this.instance.attr('cx', value);
  }
  get x() {
    return this.instance.attr('cx');
  }
  set y(value: number) {
    this.instance.attr('cy', value);
  }
  get y() {
    return this.instance.attr('cy');
  }
}

export class Snake extends GameObject {
    constructor(field: any, posX: number, posY: number) {
      const ins = d3.select(field)
                    .append('circle')
                    .attr('cx', posX)
                    .attr('id', 'snake')
                    .attr('cy', posY)
                    .attr('r', 10)
                    .attr('fill', 'red');
      super(ins);
    }
    length: number;
    speed: number;
}

export class OrientalGameObject extends GameObject {
    direction: Direction;
}

export class SnakeBodyPart extends OrientalGameObject {}

export class SnakeHead extends SnakeBodyPart {

}

export class SnakeBody extends SnakeBodyPart {

}

export class SnakeTail extends SnakeBodyPart {

}

export enum Direction {
    Up = 0,
    Right = 1,
    Down = 2,
    Left = 3
}

export class Food extends GameObject {
    name: string;
}

export class Floor extends GameObject {

}
