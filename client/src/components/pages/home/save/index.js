import React from 'react';
import './save.css';

function SaveBtn (props) {
    return (
        <div className="save-host">
            <button type="button" {...props} className="btn btn-outline-primary">Save</button>
        </div>
    );
}

export default SaveBtn;