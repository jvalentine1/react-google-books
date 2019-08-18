import React from 'react';
import './bookrow.css';

function Bookrow(props) {
    return (
        <div className="row book-row">
            <div className="col-md-12 book-col">
                <img className="image" src={props.image} alt="book-thumbnail"></img>
                <h1 className="title">{props.title}</h1>
                <h3 className="author-head">Author:</h3>
                <h3 className="author">{props.author}</h3>
                <br></br>
                <h3 className="descript-head">Description:</h3>
                <p className="description">{props.description}</p>
                <br></br>
                <h3 className="descript-head">Learn More:</h3>
                <a className="link" target="_blank" rel="noopener noreferrer" href={props.link}>{props.link}</a>
                <br></br>
                <button type="button" {...props} className="btn btn-outline-primary save-btn">Save</button>
            </div>
        </div>
    );
}

export default Bookrow;