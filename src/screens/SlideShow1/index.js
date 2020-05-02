import React from 'react';
import { View } from 'react-native';
import Background from '~/components/Background';

import icon from '~/assets/images/device-apps.png';

import {
  MessageContainer,
  Image,
  RedText,
  WhiteText,
  SmallText,
} from './styles';

export default function SlideShow1() {
  return (
    <Background>
      <MessageContainer>
        <Image source={icon} style={{ resizeMode: 'contain' }} />
        <View>
          <RedText>Os Apps da Globo</RedText>
          <WhiteText>Agora em um só lugar</WhiteText>
          <SmallText>fique por dentro das notícias,</SmallText>
          <SmallText>esportes e séries</SmallText>
        </View>
      </MessageContainer>
    </Background>
  );
}
