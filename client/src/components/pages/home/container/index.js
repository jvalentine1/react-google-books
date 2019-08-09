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
                            
                        );
                    })}
                    </Host>
                    </ContentWrap>
            </Wrapper>
        )
    }
}

export default HomeContainer;