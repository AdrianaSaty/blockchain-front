import React, { Component } from 'react';
import('./Loading.css');

class Loading extends Component {

    render() {
        return (
            <div>
                <div class="container" id="preloader">
                    <div class="lds-ring"><div></div><div></div><div></div><div></div>	</div>
                </div>
                <div id="content"></div>
            </div>
        );
    }
}

export default Loading;