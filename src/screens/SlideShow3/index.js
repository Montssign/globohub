import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setSlide } from '~/store/modules/slideShow/actions';

import icon from '~/assets/images/logo.png';
import Background from '~/components/Background';
import Button from '~/components/Button';

import { Image, Container, SmallText, WhiteText, RedText } from './styles';

export default function SlideShow3({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(setSlide(3));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <Background>
      <Container>
        <Image source={icon} style={{ resizeMode: 'contain' }} />
        <SmallText>Crie sua conta Globo</SmallText>
        <WhiteText>Para acessar a Globo Hub</WhiteText>
        <RedText>E não perca nada!</RedText>
        <Button style={{ marginTop: 36 }}>Criar conta Globo</Button>
        <Button style={{ margin: 16 }} type="secondary">
          Já tenho uma conta
        </Button>
        <Button style={{ margin: 16 }} type="link">
          Criar mais tarde
        </Button>
      </Container>
    </Background>
  );
}

SlideShow3.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};
