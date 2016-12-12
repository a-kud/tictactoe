import React from 'react';

class Board extends React.Component {

    /*createRows(n) {
        return [...Array(n).keys()].map((i) => {
            <div className="board-row"></div>
        });
    }*/

    render() {
        let rows = [...Array(3).keys()].map((i) => {
                <div className="board-row">foo</div>
            });
        return (
            <div>{rows}</div>
        );
    }
}

export default Board;
