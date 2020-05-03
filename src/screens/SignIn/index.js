import React, { useState } from 'react';
import { TouchableHighlight, RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import ContaGloboInput from '~/components/ContaGloboInput';
import ContaGloboButton from '~/components/ContaGloboButton';
import ContaGloboOthers from '~/components/ContaGloboOthers';

import {
  Container,
  Message,
  Label,
  LinkButton,
  DisplayLine,
  Text,
  Button,
} from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignOn() {
    navigation.navigate('SignOn');
  }

  function handleLogin() {
    navigation.navigate('ChosePlatform');
  }

  return (
    <Container>
      <Message>
        Uma só conta para o GloboHub e todos os outros produtos Globo
      </Message>

      <Label>E-mail</Label>
      <ContaGloboInput type="email" value={email} setValue={setEmail} />
      <TouchableHighlight>
        <LinkButton>Esqueceu seu login?</LinkButton>
      </TouchableHighlight>

      <Label>Senha</Label>
      <ContaGloboInput
        type="password"
        secureTextEntry
        value={password}
        setValue={setPassword}
      />
      <TouchableHighlight>
        <LinkButton>Esqueceu sua senha?</LinkButton>
      </TouchableHighlight>

      <ContaGloboButton onPress={handleLogin}>Entrar</ContaGloboButton>
      <DisplayLine>
        <Text>Não tem conta? </Text>
        <RectButton onPress={handleSignOn}>
          <Button>CADASTRE-SE.</Button>
        </RectButton>
      </DisplayLine>

      <ContaGloboOthers within="entre" />
    </Container>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
