import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import ContaGloboInput from '~/components/ContaGloboInput';
import ContaGloboButton from '~/components/ContaGloboButton';
import ContaGloboOthers from '~/components/ContaGloboOthers';

import { Container, Message, Label, DisplayLine, Text, Button } from './styles';

export default function SignOn({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    navigation.navigate('SignIn');
  }

  function handleRegister() {}

  return (
    <Container>
      <Message>
        Uma só conta para o GloboHub e todos os outros produtos Globo
      </Message>

      <Label>Nome completo</Label>
      <ContaGloboInput value={name} setValue={setName} />

      <Label>E-mail</Label>
      <ContaGloboInput type="email" value={email} setValue={setEmail} />

      <Label>Senha</Label>
      <ContaGloboInput
        type="password"
        secureTextEntry
        value={password}
        setValue={setPassword}
      />

      <ContaGloboButton onPress={handleRegister}>Cadastrar</ContaGloboButton>
      <DisplayLine>
        <Text>Já tem conta? </Text>
        <RectButton onPress={handleSignIn}>
          <Button>ENTRE.</Button>
        </RectButton>
      </DisplayLine>

      <ContaGloboOthers within="cadastre-se" />
    </Container>
  );
}

SignOn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
