import React from "react";

class Modal extends React.Component {
    render() {
        return (
            <div>
                <a href="#prompt-modal" rel="modal:open"> Prompt </a>
                <div id="prompt-modal" className="modal-hider">
                    <p>Please choose player</p>
                    <button id="choose-x" type="button" onClick={() => console.log("x clicked")}>X</button>
                    <button id="choose-o" type="button">O</button>
                </div>
            </div>
        );
    }
}

export default Modal;

// <div className="modal">
// 	<div className="modal-inner">
// 		<a rel="modal:close"> x </a>
// 		<div className="modal-content"></div>
//     </div>
// </div>

// <a href="#prompt-modal" rel="modal:open"> Prompt </a>
