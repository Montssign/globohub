import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, View } from './styles';

export default function Button({ children, style, type }) {
  return (
    <Container type={type} style={style}>
      <View type={type}>
        <Text type={type}>{children}</Text>
      </View>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  type: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  type: 'primary',
};
