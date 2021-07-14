import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  return(
      <Container>
          <span> Assuntos do momento no Brasil</span>
          <strong>100% dos Brasileros são vacinados contra o Covid19</strong>
      </Container>
  );
}

export default News;