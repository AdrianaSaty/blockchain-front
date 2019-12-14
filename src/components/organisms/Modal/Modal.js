  import React, { Component } from 'react';
  import('./Modal.css');


  class Modal extends Component {
    onClose = (e) => {
      this.props.onClose && this.props.onClose(e)
    }
    render() {
      if(this.props.show) {
        return null;
      }

      return (
        <div className="backdropStyle">
          <div className="modalStyle">
              {this.props.children}
              <span onClick={(e) => {this.onClose(e)}} class="close">&times;</span>
              <div className="footerStype close">
              </div>
          </div>
        </div>
        );
    }
  }

  export default Modal;