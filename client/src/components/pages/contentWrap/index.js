import React from 'react';
import './contentWrap.css';

function ContentWrap(props) {
    return (
        <div className="content-host">{props.children}</div>
    );
}

export default ContentWrap;
