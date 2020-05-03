import React from 'react';
import PropTypes from 'prop-types';

import icon from '~/assets/images/conta-globo.png';

import { Container, Image, Icon } from './styles';

export default function ContaGloboHeader({ navigation }) {
  function handleClose() {
    navigation.navigate('SlideShow3');
  }
  return (
    <Container>
      <Icon name="chevron-left" onPress={navigation.goBack} />
      <Image source={icon} style={{ resizeMode: 'contain' }} />
      <Icon name="close" onPress={handleClose} />
    </Container>
  );
}

ContaGloboHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
