import React from 'react';
import Wrapper from '../../wrapper';
import Header from '../../header';
import TitleImage from '../../title';
import ContentWrap from '../../contentWrap';

class SavedContainer extends React.Component {
    
    state = {

    }

    render() {
        return (
            <Wrapper>
                <Header>
                    <TitleImage />
                </Header>
                    <ContentWrap>
                        <h1 className="text-center">saved test</h1>
                    </ContentWrap>
            </Wrapper>
        );
    }
}

export default SavedContainer;