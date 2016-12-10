import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Game from "./components/Game";

// document.addEventListener("DOMContentLoaded", () => {
//     ReactDOM.render(
//         <Counter />,
//         document.querySelector("#board")
//     );
// });

ReactDOM.render(
    <Game />,
    document.querySelector(".container")
);

if (module.hot) {
    module.hot.accept();
}
