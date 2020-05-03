import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import facebookIcon from '~/assets/images/facebook.png';
import googleIcon from '~/assets/images/google.png';

import {
  Container,
  DisplayLine,
  TextWith,
  Line,
  SocialButton,
  SocialButtonView,
  Image,
} from './styles';

export default function ContaGloboOthers({ within }) {
  function handleMessage() {
    Alert.alert('Desculpe', 'Este recurso ainda não está em funcionamento');
  }

  return (
    <Container>
      <DisplayLine>
        <Line />
        <TextWith> ou {within} com </TextWith>
        <Line />
      </DisplayLine>
      <DisplayLine>
        <SocialButton onPress={handleMessage}>
          <SocialButtonView>
            <Image source={facebookIcon} style={{ resizeMode: 'contain' }} />
            <TextWith bold>Facebook</TextWith>
          </SocialButtonView>
        </SocialButton>
        <SocialButton onPress={handleMessage}>
          <SocialButtonView>
            <Image source={googleIcon} style={{ resizeMode: 'contain' }} />
            <TextWith bold>Google</TextWith>
          </SocialButtonView>
        </SocialButton>
      </DisplayLine>
    </Container>
  );
}

ContaGloboOthers.propTypes = {
  within: PropTypes.string.isRequired,
};
