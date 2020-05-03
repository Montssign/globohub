import React from 'react';
import PropTypes from 'prop-types';

import { RectButton } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

export default function FavoriteCategoryItem({ title, chosed, ...rest }) {
  return (
    <RectButton {...rest} style={{ width: 160, height: 56, margin: 8 }}>
      <Container chosed={chosed}>
        <Title>{title}</Title>
      </Container>
    </RectButton>
  );
}

FavoriteCategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  chosed: PropTypes.bool.isRequired,
};
