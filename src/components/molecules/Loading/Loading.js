import React, { Component } from 'react';
import('./Loading.css');

class Loading extends Component {

    render() {
        return (
            <div>
                <div className="" id="preloader">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div>	</div>
                </div>
                <div id="content"></div>
            </div>
        );
    }
}

export default Loading;