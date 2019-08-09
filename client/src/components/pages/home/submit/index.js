import React from 'react';
import './submit.css';

function Submit(props) {
    return (
        <div className="submit-host">
            <button type="submit" className="btn btn-primary submit-btn" {...props}>Submit</button>
        </div>
    );
}

export default Submit;