import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div className="title-host">{props.children}</div>
    );
}

export default Header;