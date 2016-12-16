import React from 'react';
import Square from "./Square";

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            grid: Array(9).fill(null),
        };
    }

    makeSquare(n) {
        return <Square value={ this.state.grid[n] }
            onClick={() => { this.handleClick(n) }}
                />
    }

    handleClick(n) {

    }

    render() {
        return (
            <div className="board">
              <div className="board-row">
                {this.makeSquare(0)}
                {this.makeSquare(1)}
                {this.makeSquare(2)}
              </div>
              <div className="board-row">
                {this.makeSquare(3)}
                {this.makeSquare(4)}
                {this.makeSquare(5)}
              </div>
              <div className="board-row">
                {this.makeSquare(6)}
                {this.makeSquare(7)}
                {this.makeSquare(8)}
              </div>
            </div>
        );
    }
}

export default Board;
