import { Item, Weapon } from "./Items";
import { applyMixins } from "../helpers";
import { SquaresService } from ".";
import { Square } from "./SquaresService";
import * as Helpers from "../helpers";
import Message from "../services/MessageService";

/** Position on a grid */
export interface Position {
  x: number;
  y: number;
}

class Identifiable {
  name: string = "An Entity";
  icon: string = "E";
}

export class Positionable {
  position: Position = { x: undefined, y: undefined };

  get square(): Square {
    let square = SquaresService.getSquare(this.position.x, this.position.y);
    return square;
  }
}

class Movable extends Identifiable {
  moveDestination: Position;

  setMoveDestinationSquare(squareIndex: number) {
    this.setMoveDestinationPosition(SquaresService.targetSquarePosition(squareIndex));
  }

  setMoveDestinationPosition(targetPosition: Position) {
    let targetSquare = SquaresService.getSquare(targetPosition.x, targetPosition.y);
    if (!targetSquare.entity || targetSquare.entity.isDead) {
      this.moveDestination = targetPosition;
      Helpers.resetGivenFieldsOnACollection(SquaresService.squares, "isChosenDestination");
      targetSquare.isChosenDestination = true;
    } else {
      Message.send(`${this.name} can't move into square (${targetPosition.x}, ${targetPosition.y})`);
    }
  }
}

export class Mortal extends Positionable {
  hp: number = 100;
  maxHp: number = 100;
  get isDead(): boolean {
    return this.hp <= 0;
  }
  get isAlive(): boolean {
    return this.hp > 0;
  }
}

export class Bleedable extends Mortal {
  bleeding: number;
  bleedingReductionPerTurn: number = 1;
  bleed(): number {
    let entity = this;
    let bloodReleased = 0;
    if (entity.bleeding && entity.isAlive) {
      bloodReleased = entity.bleeding;
      entity.hp -= bloodReleased;
      entity.bleeding -= entity.bleedingReductionPerTurn;
    }
    return bloodReleased;
  }

  bleedExternally() {
    if (!this.bleeding) return;
    let entity = this;
    let bloodReleased = this.bleed();
    let square: Square = SquaresService.getSquare(entity.position.x, entity.position.y);
    SquaresService.addBlood(square, bloodReleased);
  }
}

class Breathing extends Mortal {
  isSupposedToBeBreathing: boolean = undefined;
  get isBreathing(): boolean {
    return this.isAlive && this.isSupposedToBeBreathing;
  }
  set isBreathing(value: boolean) {
    this.isSupposedToBeBreathing = value;
  }
}

class Combative extends Identifiable {
  targetPosition: Position;
  isShooting?: boolean;
  ceaseFire?: boolean;
  hasWeapon?: boolean;
  attackPosition(targetedSquarePosition: Position) {
    if (this.hasWeapon) {
      this.targetPosition = targetedSquarePosition;
      this.isShooting = true;
    } else {
      Message.send(`${this.name} can't shoot - no weapon equipped`);
    }
  }
}

export class HavingInventory {
  inventory: Item[];
  takeFromInventory(itemName: string): Item {
    let actualItemIndex = this.inventory.findIndex((item) => item.name === itemName);
    let actualItem = this.inventory.splice(actualItemIndex, 1)[0];

    return actualItem;
  }
  addToInventory(item: Item) {
    if (!this.inventory) {
      this.inventory = [];
    }
    this.inventory.push(item);
  }
}

class HavingEquipment extends HavingInventory {
  equipment: any;
  hasWeapon?: boolean;

  equipInHands(itemName: string) {
    this.unEquipFromHands();
    let item = this.takeFromInventory(itemName);
    this.equipment.hands = item;
    if (item instanceof Weapon) {
      this.hasWeapon = true;
    } else {
      this.hasWeapon = false;
    }
  }

  unEquipFromHands() {
    if (this.equipment.hands) {
      this.inventory.push(this.equipment.hands);
      this.equipment.hands = null;
      this.hasWeapon = false;
    }
  }
}

export class Entity {
  // Extended by mixins below
  constructor(...props) {
    Object.assign(this, ...props);
  }
  isFriendly?: boolean;
  active?: boolean;
}

/************************************************************/
/* Always update both lists */

export interface Entity
  extends Identifiable,
    Positionable,
    Mortal,
    Bleedable,
    Movable,
    Breathing,
    Combative,
    HavingInventory,
    HavingEquipment {}
applyMixins(Entity, [
  Identifiable,
  Positionable,
  Mortal,
  Bleedable,
  Movable,
  Breathing,
  Combative,
  HavingInventory,
  HavingEquipment,
]);

/************************************************************/