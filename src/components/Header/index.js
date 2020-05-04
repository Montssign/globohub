import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { Container, Button, Title } from './styles';

export default function Header({ title, hasGoBack, hasClose, height, scene }) {
  const navigation = useNavigation();
  title = useMemo(() => {
    if (title) {
      return title;
    }
    if (scene.descriptor) {
      const { options } = scene.descriptor;
      if (options.headerTitle) {
        return options.headerTitle;
      }
      if (options.title) {
        return options.title;
      }
      return scene.route.name;
    }
    return 'Globo Hub';
  }, [scene, title]);

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
  title: PropTypes.string,
  hasGoBack: PropTypes.bool,
  hasClose: PropTypes.bool,
  height: PropTypes.number,
  scene: PropTypes.shape({
    descriptor: PropTypes.shape({
      options: PropTypes.shape({
        headerTitle: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    route: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

Header.defaultProps = {
  title: '',
  hasGoBack: false,
  hasClose: false,
  height: 56,
  scene: {},
};
