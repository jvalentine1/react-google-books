import React from 'react';
import Wrapper from '../../wrapper';
import Header from '../../header';
import TitleImage from '../../title';
import Host from '../../home/host';
import SectionTitle from '../header';
import BookRow from '../bookRow';
import API from '../../../../utils/API';

class SavedContainer extends React.Component {
    
    state = {
        books: [],
        modalClass: "no-modal",
        title: ""
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getSavedBooks().then(books => {
            this.setState({ books: books.data });
        });
    }

    deleteBook = id => {

        API.deleteBooks(id).then(() => {
            this.loadBooks();
        });
    }

    render() {
        return (
            <Wrapper>
                <Header>
                    <TitleImage />
                </Header>
                <SectionTitle />
                    <Host>
                    {this.state.books.map(book => {
                        return (
                            <BookRow 
                            key={book._id}
                            image={book.image}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            link={book.link}
                            onClick={() => this.deleteBook(book._id)}
                            >                           
                            </BookRow>
                        );
                    })}
                    </Host>
            </Wrapper>
        );
    }
}

export default SavedContainer;