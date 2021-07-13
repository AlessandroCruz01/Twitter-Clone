import React from 'react';

import Main from '../Main'
import MenuBar from '../MenuBar';

import { Container, Wrapper} from './styles';

const Layout: React.FC = () => {
  return(
      <Container>
          <Wrapper>
                <MenuBar />
                  <Main />
                {/* <SlideBar /> */}
          </Wrapper>
      </Container>
  )
}

export default Layout;