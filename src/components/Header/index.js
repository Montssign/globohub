import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { Container, Button, Title } from './styles';

export default function Header({ title, hasGoBack, hasClose, height }) {
  const navigation = useNavigation();
  function goBack() {
    if (hasGoBack) {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.navigate('Home');
      }
    }
  }

  function close() {
    if (hasClose) {
      navigation.navigate('Home');
    }
  }

  return (
    <Container height={height}>
      <Button
        height={height}
        onPress={goBack}
        style={{ opacity: hasGoBack ? 1 : 0 }}
      >
        <Icon name="chevron-left" size={30} />
      </Button>
      <Title>{title}</Title>
      <Button
        height={height}
        onPress={close}
        style={{ opacity: hasClose ? 1 : 0 }}
      >
        <Icon name="close" size={25} />
      </Button>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasGoBack: PropTypes.bool,
  hasClose: PropTypes.bool,
  height: PropTypes.number,
};

Header.defaultProps = {
  hasGoBack: false,
  hasClose: false,
  height: 56,
};
