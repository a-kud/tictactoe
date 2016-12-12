import React from 'react';
import Board from './Board';

class Game extends React.Component {
    render() {
        return (
            <div className="game-area">
                <Board />
            </div>
        );
    }
}

export default Game;
