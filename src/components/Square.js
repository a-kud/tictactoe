import React from "react";

class Square extends React.Component {

    render() {
        let isWinner =  "",
            classList = `${isWinner} square`;
        return (
            <span className={classList} onClick={() => this.props.onClick()}>
                {this.props.value}
            </span>
        );
    }
}

export default Square;
