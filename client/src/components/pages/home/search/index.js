import React from 'react';
import './search.css';

function SearchBar(props) {
    return (
        <form className="form-host">
            <div className="form-group">
                <label>Search Books:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" {...props} placeholder="Your Search"></input>
            </div>
        </form>
    );
}

export default SearchBar;
