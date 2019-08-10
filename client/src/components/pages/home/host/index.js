import React from 'react';
import './host.css';

function Host(props) {
    return (
        <div className="container book-host">{props.children}</div>
    );
}

export default Host;