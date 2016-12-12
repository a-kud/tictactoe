import React from 'react';

class Board extends React.Compoent {

    createRows(n) {
        return [...Array(n).keys()].map((i) => {
            <div className="board-row"></div>
        });
    }

    render() {
        return (
            

        );
    }
}
