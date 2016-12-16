import React from "react";

class Square extends React.Component {

    render() {
        return (
            <span className="square">{this.props.onClick()}</span>
        );
    }
}

export default Square;
