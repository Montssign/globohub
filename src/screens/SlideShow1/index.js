import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setSlide } from '~/store/modules/slideShow/actions';

import icon from '~/assets/images/device-apps.png';
import Background from '~/components/Background';

import {
  MessageContainer,
  Image,
  RedText,
  WhiteText,
  SmallText,
} from './styles';

export default function SlideShow1({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(setSlide(1));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

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

SlideShow1.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};
