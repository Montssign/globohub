import React from 'react';

import {
  Container,
  Image,
  Message,
  TextContainer,
  Information,
} from './styles';

export default function FriendMessage({ data }) {
  return (
    <Container>
      <TextContainer>
        <Information>
          {data.name} - {data.when}
        </Information>
        <Message>{data.message}</Message>
      </TextContainer>
      <Image source={{ uri: data.avatar.url }} />
    </Container>
  );
}
