import React from "react";

class Square extends React.Component {
    render() {
        return (
            <span className="square" onClick={() => {
                alert("clicked");
            }}></span>
        );
    }
}

export default Square;
