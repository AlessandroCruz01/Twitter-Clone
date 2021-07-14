import React from 'react';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

const SlideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>

                <p>{'Lorem ipsum dolar sit amet. '.repeat(40)}</p>

            </Body>

        </Container>
    );
}

export default SlideBar;