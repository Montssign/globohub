import React from 'react';
import Background from '~/components/Background';

import icon from '~/assets/images/logo.png';

import { Image, Container, SmallText, WhiteText, RedText } from './styles';
import Button from '~/components/Button';

export default function SlideShow3() {
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
