import React from 'react';
import { View } from 'react-native';
import Background from '~/components/Background';
import { MessageContainer } from '../SlideShow1/styles';

import icon from '~/assets/images/map.png';

import { Image, RedText, WhiteText, SmallText } from './styles';
import Button from '~/components/Button';

export default function SlideShow2() {
  return (
    <Background>
      <MessageContainer>
        <Image source={icon} style={{ resizeMode: 'contain' }} />
        <View>
          <SmallText>Habilite seu GPS</SmallText>
          <WhiteText>E Melhore</WhiteText>
          <RedText>Sua Experiência</RedText>
        </View>
        <Button style={{ marginTop: 56 }}>Habilitar agora</Button>
      </MessageContainer>
    </Background>
  );
}
