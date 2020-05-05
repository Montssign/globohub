import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Message } from './styles';

export default function FailMessage() {
  return (
    <Container>
      <Icon name="sentiment-dissatisfied" size={60} />
      <Message>
        Desculpe, esta tela ainda não está disponível nessa versão
      </Message>
    </Container>
  );
}
