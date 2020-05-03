import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Geolocation from '@react-native-community/geolocation';

import { setSlide } from '~/store/modules/slideShow/actions';

import icon from '~/assets/images/map.png';
import Background from '~/components/Background';

import {
  Image,
  RedText,
  WhiteText,
  SmallText,
  MessageContainer,
} from './styles';
import Button from '~/components/Button';

export default function SlideShow2({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(setSlide(2));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  function handleRequestGeolocation() {
    try {
      Geolocation.getCurrentPosition(position => {
        console.tron.log(position);
      });

      navigation.navigate('SlideShow3');
    } catch (error) {
      Alert.alert('Você pode ativar a qualquer momento');
    }
  }

  return (
    <Background>
      <MessageContainer>
        <Image source={icon} style={{ resizeMode: 'contain' }} />
        <View>
          <SmallText>Habilite seu GPS</SmallText>
          <WhiteText>E Melhore</WhiteText>
          <RedText>Sua Experiência</RedText>
        </View>
        <Button onPress={handleRequestGeolocation} style={{ marginTop: 56 }}>
          Habilitar agora
        </Button>
      </MessageContainer>
    </Background>
  );
}

SlideShow2.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
