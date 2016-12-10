/*If any of your files produce side effects when they run, for instance if they
 add elements to the DOM, then you'll need to use module.hot.dispose to dispose
 of those side effects.*/

import React from "react";

/**
 * A counter button: tap the button to increase the count.
 */
 class Counter extends React.Component {

    render() {
        let div0 = document.createElement('div');
        div0.setAttribute('style', 'width: 10px; height: 10px; background: green');
        document.body.appendChild(div0);

        if (module.hot) {
            module.hot.dispose( () => {
                div0.parentNode.removeChild(div0);
            });
        }
        return (
            <button>
                Zoom!
            </button>
        );
    }
 }

 export default Counter;
