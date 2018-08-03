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
    position: Position;
}

export class Snake extends GameObject {
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
