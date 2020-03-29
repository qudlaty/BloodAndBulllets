import React, { ReactElement } from "react";
import BoardSquare from "../Square";
import EntityPawn from "../EntityPawn";
import { Entity } from "../../services/EntitiesValues";
import { Square } from "../../services/SquaresService";

import styles from "./Board.module.scss";

interface BoardProps {
  onClick(i: number): void;
  squares: Square[];
  entities: Entity[];
  size: number;
  isRotated: boolean;
}

export default class Board extends React.PureComponent<BoardProps> {
  constructor(props: BoardProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    console.log("Handles Click on Board", i);
    this.props.onClick(i);
  }

  renderSquare(i: number, rowId: number, colId: number) {
    /*
    We pass one and the same function to all the Squares when rendering,
    so they do not detect getting a new fat-arrow function as a change of props.

    This is CRUCIAL to only rerender squares with changed values.

    Additionally, we need to ensure that Unchanged squares have the same values of objects passed down here.
    */
    let square = this.props.squares[i];
    let entity = (this.props.squares[i] && this.props.squares[i].entity) || ({} as Entity);
    return (
      <BoardSquare
        key={i}
        squareId={i + ""}
        onClick={this.handleClick}
        // Entity on this square
        active={entity.active}
        isDead={entity.isDead}
        // Environment state fields
        blood={square.blood}
        items={square.items}
        isLit={square.isLit}
        squareType={square.squareType}
        isInTwilightZone={square.isInTwilightZone}
        // Interface state fields
        isAvailableDestination={square.isAvailableDestination}
        isChosenDestination={square.isChosenDestination}
        isTargeted={square.isTargeted}
      />
    );
  }

  renderEntityPawns = () => this.props.entities.map((entity) => <EntityPawn entity={entity} />);

  render() {
    let cellId = 0;
    let rowId = 0;
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

    let entityPawns: ReactElement[] = this.renderEntityPawns();

    let className: string = styles.board;
    const isBoardRotated: boolean = this.props.isRotated;
    if (isBoardRotated) {
      className += ` ${styles["board--rotated"]}`;
    }
    return (
      <div className={className}>
        {rowsOfSquares}
        {entityPawns}
      </div>
    );
  }
}
