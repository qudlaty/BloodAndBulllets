import React, { ReactElement } from "react";

import SquareComponent from "../Square";
import EntityPawnComponent from "../EntityPawn";
import * as Helpers from "../../helpers";
import { Entity } from "../../services/EntitiesService";
import { Square } from "../../services/SquaresService";

import styles from "./Board.module.scss";

interface BoardProps {
  onClick(i: number): void;
  squares: Square[]; // updated every tick
  entities: Entity[]; // updated every tick
  size: number;
  isRotated: boolean;
}
/**
 * @description Board component renders Squares and EntityPawns
 */
export default class Board extends React.Component<BoardProps> {
  handleClick = (i: number) => {
    console.log("Handles Click on Board", i);
    this.props.onClick(i);
  };

  renderSquare(i: number, rowId: number, colId: number) {
    let square = this.props.squares[i];

    return (
      <SquareComponent // is a pureComponent
        key={`r${rowId}_c${i}`}
        squareId={i}
        className={Helpers.getCssClassesForAGivenSquare(square)}
        onClick={this.handleClick}
        blood={square.blood} // number
        items={square.items} // list of objects
        itemsNumber={square.items && square.items.length}
      ></SquareComponent>
    );
  }

  EntityPawns = (): ReactElement[] => this.props.entities.map((entity) => <EntityPawnComponent key={entity.name} entity={entity} />);

  BoardSquares = () => {
    let cellId: number = 0;
    let rowId: number = 0;
    let colId: number;

    let rowsOfSquares = Array(this.props.size)
      .fill(null)
      .map((row, number) => {
        colId = 0;
        let cells = Array(this.props.size)
          .fill(null)
          .map((cell, number) => {
            return this.renderSquare(cellId++, rowId, colId++);
          });
        return (
          <div key={rowId++} className={styles["board__row"]}>
            {cells}
          </div>
        );
      });

    return rowsOfSquares;
  }; // Board Squares

  render() {
    let className: string = styles.board;
    if (this.props.isRotated) {
      className += ` ${styles["board--rotated"]} board--rotated`;
    }
    return (
      <div className={className}>
        {this.BoardSquares()}
        {this.EntityPawns()}
      </div>
    );
  }
}
