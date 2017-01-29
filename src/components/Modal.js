import React from "react";

class Modal extends React.Component {
    render() {
        return (
            <div>
                <a href="#prompt-modal" rel="modal:open"> Change player </a>
                <div id="prompt-modal" className="modal-hider">
                    <p>Please choose player</p>
                    <button id="choose-x" type="button" onClick={() => this.props.onClick("X")}>X</button>
                    <button id="choose-o" type="button" onClick={() => this.props.onClick("O")}>O</button>
                </div>
            </div>
        );
    }
}

export default Modal;
