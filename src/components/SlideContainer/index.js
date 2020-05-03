import React from 'react';

import { Container, Button, Ball } from './styles';

const SlideContainer = () => {
  const active = 1;
  return (
    <Container>
      <Button>
        <Ball active={active === 1} />
      </Button>
      <Button>
        <Ball active={active === 2} />
      </Button>
      <Button>
        <Ball active={active === 3} />
      </Button>
    </Container>
  );
};

export default SlideContainer;
