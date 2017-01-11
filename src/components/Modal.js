import React from "react";

class Modal extends React.Component {
    render() {
        return (
            <div id="prompt-modal" className="modal-hider">
                <p>Please choose player</p>
                <button id="choose-x" type="button">X</button>
                <button id="choose-o" type="button">O</button>
            </div>
        );
    }
}

export default Modal;
