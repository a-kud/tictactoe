import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
require("./styles/main.css")


ReactDOM.render(
    <Game />,
    document.querySelector(".container")
);


if (module.hot) {
    module.hot.accept();
}
