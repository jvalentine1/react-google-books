import React from 'react';
import './modal.css';

function Modal(props) {
    return (
        <div id="myModal" className={props.modalclass}>
            <div className="modal-content">
                <span className="close" {...props}>&times;</span>
                <div className="modal-text">
                    <h1 className="title text-center">{props.title}</h1>
                    <h3 className="message text-center">Saved to your books</h3>
                </div>
            </div>
        </div>
    );
}

export default Modal;