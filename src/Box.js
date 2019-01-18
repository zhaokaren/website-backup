import React, {Component} from 'react';
import "./Box.css"
import './PopUpExample.css'
import ReactModal from 'react-modal';
import PopUp from './PopUpDisplay.js'
import PopUp2 from './CFC.js'


class Box extends Component{
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }  

    render(){
        return(
            <div className="Container" class="col-sm-3 container" style={{padding:'0'}}>
                <div onClick={this.handleOpenModal}>
                    <div class="me">
                        <img className="display-photo" src={this.props.src} alt={this.props.name}/>
                    </div>
                    <div>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.type}</p>
                    </div>
                </div>
                <div>
                <ReactModal 
                    className="Modal"
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                <button onClick={this.handleCloseModal} type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                    <PopUp2/>
                </ReactModal>
                </div>
            
            </div>
        );
    }
}

export default Box

