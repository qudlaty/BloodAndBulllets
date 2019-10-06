import React from 'react';
import Board from '../Board';
import EntitiesList from '../EntitiesList';
import './Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arenaSize: 5,
      squares: Array(5*5).fill(null),
      entities: [
        {position: {x:0, y:0}, value: "😠", name: "John Rambo", age: 40, hp: 95, maxHp: 100, inventory: ['KA-BAR', 'M16'], equipment: {head: 'Red Bandana'},},
        {position: {x:0, y:1}, value: "👩", name: "Ellen Ripley", age: 30, hp: 50, maxHp: 65, inventory: ['Motion Detector'], equipment: {head: 'Afro'},}
      ],
      stepNumber: 0,
      xIsNext: true,
      isLooping: false,
      cycle: 0,
    }

    this.loop = this.loop.bind(this);
    this.getSquare = this.getSquare.bind(this);
    this.setSquare = this.setSquare.bind(this);

    this.squares = [];
  }

  componentDidMount(){
    this.setSquaresAccordingToPositions();
  }

  setSquaresAccordingToPositions() {
    this.squares = Array(5*5).fill(null);// DRY
    this.state.entities.forEach((entity)=>{
      this.setSquare(entity.position.x, entity.position.y, entity);
    });
    console.log("Setting State:", this.squares)
    this.setState({squares: this.squares});
  }

  getSquare(x, y) {
    return this.state.squares[x * this.state.arenaSize + y];
  }

  setSquare(x, y, square) {
    if(!this.squares.length) {
      this.squares = this.state.squares.slice();
    }
    let targetSquareIndex = y* this.state.arenaSize + x;
    console.log("Setting square #",targetSquareIndex, "as", square);
    this.squares[targetSquareIndex] = square;
    console.log("this.squares:", this.squares);
  }

  loop() {
    let stepNumber = this.state.stepNumber;

    this.setState({isLooping: true, stepNumber: ++stepNumber});

    var entities = this.state.entities.slice();
    var JR = entities[0];

    //John Rambo AI
    JR.position.x = JR.position.x +
      1 * (Math.floor(Math.random()*2)) -
      1 * (Math.floor(Math.random()*2));
    JR.position.y = JR.position.y +
      1 * (Math.floor(Math.random()*2)) -
      1 * (Math.floor(Math.random()*2));

    if(JR.position.y < 0) JR.position.y = 0;
    if(JR.position.x < 0) JR.position.x = 0;

    if(JR.position.y > this.state.arenaSize - 1) JR.position.y = 4;
    if(JR.position.x > this.state.arenaSize - 1) JR.position.x = 4;

    this.setState({entities: entities});

    this.setSquaresAccordingToPositions();
    console.log("---");
    console.log(this.state);
    setTimeout(this.loop, 1000);
  }

  handleBoardClick(i) {
    let squares = this.state.squares.slice();
    if(squares[i]) {
      console.log("Clicked:", squares[i]);
    }
    if(!this.state.isLooping) {
      this.loop();
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleBoardClick(i)}
            size={this.state.arenaSize}
          />
          <EntitiesList
            entities={this.state.entities}
          />
          <div className="step-counter">{this.state.stepNumber}</div>
        </div>
        <div className="game-info">
          <ul>
            <li>Add an actual TODO list here.</li>
            <li>Make characters selectable</li>
            <li>Make selected characters movable</li>
          </ul>
        </div>
      </div>
    );
  }
};