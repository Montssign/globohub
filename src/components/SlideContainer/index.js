import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSlide } from '~/store/modules/slideShow/actions';

import { Container, Button, Ball } from './styles';

const SlideContainer = () => {
  const dispatch = useDispatch();
  const active = useSelector(state => state.slideShow.currentStep);

  function handleToSlide(slide) {
    dispatch(setSlide(slide));
  }

  return (
    <>
      <Container>
        <Button onPress={() => handleToSlide(1)}>
          <Ball active={active === 1} />
        </Button>
        <Button onPress={() => handleToSlide(2)}>
          <Ball active={active === 2} />
        </Button>
        <Button onPress={() => handleToSlide(3)}>
          <Ball active={active === 3} />
        </Button>
      </Container>
    </>
  );
};

export default SlideContainer;
