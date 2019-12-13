// import React, { Component } from 'react';
// import Dashboard from '../organisms/';
// import('./Modal.css');

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";
  
//     return (
//       <div className={showHideClassname}>
//         <section className="modal-main">
//           {children}
//           <button onClick={handleClose}>close</button>
//         </section>
//       </div>
//     );
//   };


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

  //     constructor(props) {
  //         super(props);
  //         this.state = {
  //             show: this.props.show,
  //             children: this.props.children,
  //             handleClose: this.props.handleClose,
  //             showHideClassName: "modal display-none"
  //         }
  //         this.handleChange = this.handleChange.bind(this);

  //     }

  //     handleChange(event) {
  //         const target = event.target;
  //         const name = target.name;
  //         let value;
  //         this.props.showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

  //         this.setState({
  //             [name]: value
  //         });
  //     }

      
  //     render() {
  //         const { showHideClassname, children, handleClose } = this.state;

  //         return (
  //             <div className={showHideClassname}>
  //                 <section className="modal-main">
  //                     {children}
  //                     <button onClick={handleClose}>close</button>
  //                 </section>
  //             </div>
  //         )
  //     }
  // };


  export default Modal;