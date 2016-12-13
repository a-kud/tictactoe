import React from "react";

class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <span className="square" onClick={() => {
                this.setState({ value: "X"})

            }}>{this.state.value}</span>
        );
    }
}

export default Square;
