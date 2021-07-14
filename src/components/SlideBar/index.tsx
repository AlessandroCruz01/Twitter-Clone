import React from 'react';
import StickBox from 'react-sticky-box'

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

import List from '../List/List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SlideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickBox>
                <Body>
                    <List 
                        title="Talvez voce curta"
                        elements={[
                            <FollowSuggestion
                                name="Renato Oliveira" 
                                nickname="@renatohere" />,
                            <FollowSuggestion
                                name="Joao Loiola" 
                                nickname="@jloiola6" />,

                            <FollowSuggestion
                                name="Alif Hagnarok" 
                                nickname="@alif" />
                        ]}
                    />

                    <List 
                        title="Talvez voce curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                </Body>
            </StickBox>
        </Container>
    );
}

export default SlideBar;