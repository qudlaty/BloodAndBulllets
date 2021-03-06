import * as Helpers from "../../helpers/Helpers";
import { Square } from "./SquareClass";
import { Entity, Position } from "../EntitiesService";

class SquaresServiceClass {
  arenaSize: number = 10;

  squares: Square[] = [];

  constructor() {
    let i = this.arenaSize * this.arenaSize;
    while (i-- !== 0) {
      this.initializeSquareIfEmpty(i);
    }
  }

  getSquare(x: number, y: number): Square {
    return this.squares[this.targetSquareIndex(x, y)];
  }

  setSquare(x: number, y: number, value): void {
    this.squares[this.targetSquareIndex(x, y)] = value;
  }

  targetSquareIndex(x: number, y: number): number {
    return y * this.arenaSize + x;
  }

  targetSquarePosition(squareIndex: number): Position {
    let x: number, y: number;
    y = Math.floor(squareIndex / this.arenaSize);
    x = squareIndex % this.arenaSize;
    return { x, y };
  }

  setEntityWithinApropriateSquare(entity: Entity): void {
    this.setEntityWithinASquare(entity.position.x, entity.position.y, entity);
  }

  setEntityWithinASquare(x: number, y: number, entity: Entity) {
    let squareIndex: number = this.targetSquareIndex(x, y);
    this.initializeSquareIfEmpty(squareIndex);
    this.squares[squareIndex].entity = entity;
  }

  addBlood(square: Square, amount: number) {
    if (!square.blood) {
      square.blood = amount;
    } else {
      square.blood += amount;
    }
  }

  markSquareAsTargeted(squareIndex: number): void {
    Helpers.resetGivenFieldsOnACollection(this.squares, "isTargeted");
    this.initializeSquareIfEmpty(squareIndex);
    this.squares[squareIndex].isTargeted = true;
  }

  initializeSquareIfEmpty(squareIndex: number) {
    if (!this.squares[squareIndex]) {
      this.squares[squareIndex] = new Square();
    }
  }

  markAvailableDestinationsForSelectedEntity(entity: Entity): void {
    if (entity.active) {
      let { x, y } = entity.position;

      Helpers.resetGivenFieldsOnACollection(this.squares, "isAvailableDestination");

      for (let j = y - 1; j <= y + 1; j++) {
        if (j < 0 || j >= this.arenaSize) {
          continue;
        }
        for (let i = x - 1; i <= x + 1; i++) {
          if (i < 0 || i >= this.arenaSize || (i === x && j === y)) {
            continue;
          }

          let square: Square = this.getSquare(i, j);
          if (square.squareType === "floor") {
            square.isAvailableDestination = true;
          }

          this.setSquare(i, j, square);
        }
      }
    }
  }
  lightAllSquares(): void {
    this.squares.forEach((square) => (square.isLit = true));
  }
  castLightsFromFriendlyEntity(entity: Entity): void {
    if (entity.isFriendly) {
      let { x, y } = entity.position;

      for (let j = y - 2; j <= y + 2; j++) {
        if (j < 0 || j >= this.arenaSize) {
          continue;
        }
        for (let i = x - 2; i <= x + 2; i++) {
          if (i < 0 || i >= this.arenaSize) {
            continue;
          }

          let square: Square = this.getSquare(i, j);

          square.isInTwilightZone = true;
          this.setSquare(i, j, square);
        }
      }

      for (let j = y - 1; j <= y + 1; j++) {
        if (j < 0 || j >= this.arenaSize) {
          continue;
        }
        for (let i = x - 1; i <= x + 1; i++) {
          if (i < 0 || i >= this.arenaSize) {
            continue;
          }

          let square: Square = this.getSquare(i, j);

          square.isLit = true;
          this.setSquare(i, j, square);
        }
      }
    }
  }
}

export const SquaresService = new SquaresServiceClass();
