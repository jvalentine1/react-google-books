/* eslint-disable no-unused-vars */
import React from 'react';
import Wrapper from '../../wrapper';
import Header from '../../header';
import TitleImage from '../../title';
import ContentWrap from '../../contentWrap';
import SearchBar from '../search';
import Submit from '../submit';
import API from "../../../../utils/API";
import Host from '../host';
import Bookrow from '../bookrow';
import SaveBtn from '../save';

class HomeContainer extends React.Component {

    state = {
        query: "",
        books: []
    }

    checkInput = event => {
        const {value} = event.target;
        this.setState({ query: value});
    }

    checkQuery = event => {
        event.preventDefault();
        const search = this.state.query.toLowerCase().replace(/ +/g, "");
        console.log(search);
        API.getBooks(search)
            .then(res => this.setState({ books: res.data }, this.handleBooks))
            .catch(err => console.log(err));
    }

    handleBooks = () => {
        console.log(this.state.books);
    }

    saveBook = id => {
        
        for (let i = 0; i < this.state.books.length; i++) {
            let savedBook = this.state.books[i];
            if (id === savedBook.id) {
                console.log(savedBook);
                this.postBook(savedBook);
            }
        }
    }

    postBook = book => {
        API.saveBook({
            image: book.volumeInfo.imageLinks.thumbnail,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            link: book.volumeInfo.infoLink
        }).then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <Wrapper>
                <Header>
                    <TitleImage />
                </Header>
                    <ContentWrap>
                        <SearchBar 
                        value={this.state.query}
                        onChange={this.checkInput}
                        />
                    <Submit 
                    onClick={this.checkQuery}
                    />
                    <Host>
                    {this.state.books.map(book => {
                        return (
                            <Bookrow 
                            key={book.id}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            onClick={() => this.saveBook(book.id)}
                            >                           
                            </Bookrow>
                        );
                    })}
                    </Host>
                    </ContentWrap>
            </Wrapper>
        )
    }
}

export default HomeContainer;