import React from 'react';
import Square from "./Square";

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            grid: Array(9).fill(null),
            xNext: true,
            winnerSquares: null,
            winner: "", // X O or draw
        };
    }

    makeSquare(n) {
        return <Square hasWon={
            this.state.winnerSquares ?
                    this.state.winnerSquares.includes(n) :
                    "false"
        } index={n} value={ this.state.grid[n] }
            onClick={() => { this.handleClick(n) }}
                />
    }

    // n - board index
    handleClick(n) {
        let grid = this.state.grid.slice(),
            xNext = this.state.xNext,
            squareValue = grid[n];
        console.log(this.state.xNext);
        if (!squareValue) {
            grid[n] = xNext ? "X" : "O";
            this.setState({grid: grid,
                           xNext: !xNext,}, () => {
                            this.findWinner(grid[n]);
                            let vaccantCellIndicies = grid.map((v, i) => { if(!v) {return i;} } );
                            let vaccantCells = vaccantCellIndicies.filter((v) => v); // filter falsy values
                            let aiCell = vaccantCells[getRandom(vaccantCells.length)];
                            grid[aiCell] = !xNext ? "X" : "O";
                            this.setState({
                                grid: grid,
                            });
                           });
        }
        console.log(this.state.xNext);
        setTimeout(()=>console.log(this.state.xNext), 2500)

        // let vaccantCellIndicies = grid.map((v, i) => { if(!v) {return i;} } );
        // let vaccantCells = vaccantCellIndicies.filter((v) => v); // filter falsy values
        // let aiCell = vaccantCells[getRandom(vaccantCells.length)];
        // grid[aiCell] = xNext ? "X" : "O";
        // console.log(grid);
        // this.setState({
        //     grid: grid,
        // });
    }

    findWinner(player) {
        // player "X" or "O"
        // returns array of indicies of winning cells

        const COLUMNS = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];
        const ROWS = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
        ];
        const DIAGONALS = [
            [0, 4, 8],
            [2, 4, 6],
        ];

        let winner = [...COLUMNS, ...ROWS, ...DIAGONALS].filter((v) =>{
            return v.every((v) => {
                return this.state.grid[v] === player;
            });
        });

        if (winner.length > 0) {
            console.log(player, "wins");
            this.setState({
                winnerSquares: [].concat(...winner),
                winner: player,
            })
            return winner;
        } else {
            this.setState({
                winner: "draw",
            });
        }
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

// n - integer
function getRandom(n) {
    return Math.floor(Math.random() * n);
}
