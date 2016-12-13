import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";


ReactDOM.render(
    <Game />,
    document.querySelector(".container")
);


if (module.hot) {
    module.hot.accept();
}
