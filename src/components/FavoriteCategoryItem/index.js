import React from 'react';
import PropTypes from 'prop-types';

import { RectButton } from 'react-native-gesture-handler';
import { Container, Image, Title } from './styles';

export default function FavoriteCategoryItem({
  title,
  image,
  chosed,
  ...rest
}) {
  return (
    <RectButton {...rest} style={{ width: 160, height: 160, margin: 8 }}>
      <Container chosed={chosed}>
        <Image source={image} style={{ resizeMode: 'contain' }} />
        <Title>{title}</Title>
      </Container>
    </RectButton>
  );
}

FavoriteCategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  chosed: PropTypes.bool.isRequired,
};
