import React from "react";
import VanillaModal from "vanilla-modal";
import Board from "./Board";
import Modal from "./Modal";
import WinnerModal from "./WinnerModal";

// n - integer
function getRandom(n) {
    return Math.floor(Math.random() * n);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const modal = new VanillaModal({
    page: "html",
    clickOutside: false,
});
//modal.open("#prompt-modal");

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            grid: Array(9).fill(null),
            xNext: true,
            winnerSquares: null,
            winner: "", // X O or draw
            round: 0,
        };
    }


    // n - board index
    handleClick(n) {
        let grid = this.state.grid.slice(),
            xNext = this.state.xNext,
            squareValue = grid[n];

        console.log(grid, xNext, squareValue, n);

        if (!squareValue) {
            grid[n] = xNext ? "X" : "O";
            let vaccantCellIndicies = grid.map((v, i) => { if(!v) {return i;} } );
            let vaccantCells = vaccantCellIndicies.filter((v) => v); // filter falsy values
            let aiCell = vaccantCells[getRandom(vaccantCells.length)];
            grid[aiCell] = !xNext ? "X" : "O";
            this.setState({
                grid: grid,
                          }, () => {
                            if (this.findWinner("X") || this.findWinner("O")) {
                                sleep(100)
                                    .then(() => {
                                        Promise.resolve(alert(this.state.winner + "wins"))
                                        .then(() => {
                                            this.setState({
                                                grid: Array(9).fill(null),
                                            })
                                        })
                                    });
                            }
                           });
        };
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

            this.setState({
                winnerSquares: [].concat(...winner),
                winner: player,
            });


            return winner;
        } else {
            this.setState({
                winner: "draw",
            });
            //console.log("draw");
        }
    }

    render() {

        const grid = this.state.grid.slice();

        return (

            <div className="game-area">
                <Board
                    squares={grid}
                    onClick={(n) => {this.handleClick(n)} }
                    hasWon={(n) => {
                        return this.state.winnerSquares ?
                                this.state.winnerSquares.includes(n) :
                                "false";
                    }}
                />
                <div>{"Next player " + (this.state.xNext ? "X" : "O")}</div>
                <Modal
                    onClick={(player) => {
                        this.setState({
                            xNext: (player == "X") ? true : false,
                        })
                        modal.close('#prompt-modal');
                    }}
                />
            </div>

        );
    }
}

export default Game;
