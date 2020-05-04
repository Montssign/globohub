import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import {
  Container,
  CardContainer,
  ImageCover,
  Category,
  Title,
  Header,
  Body,
  Description,
} from './styles';

export default function Card({ title, description, image, type, category }) {
  return (
    <Container>
      <CardContainer>
        <ImageCover
          source={{ uri: image }}
          style={{
            resizeMode: 'cover',
          }}
        />
        <Header>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </Header>
        <Body type={type}>
          <Description>{description}</Description>
        </Body>
      </CardContainer>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
