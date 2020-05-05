import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  Message,
  TextContainer,
  Information,
  IconContainer,
} from './styles';

export default function MyMessage({ data }) {
  return (
    <Container>
      {data.avatar && <Image source={{ uri: data.avatar.url }} />}
      {!data.avatar && (
        <IconContainer>
          <Icon name="account-circle" size={56} />
        </IconContainer>
      )}
      <TextContainer>
        <Information>
          {data.name} - {data.when}
        </Information>
        <Message>{data.message}</Message>
      </TextContainer>
    </Container>
  );
}
