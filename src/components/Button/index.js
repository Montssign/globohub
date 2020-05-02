import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, Line } from './styles';

export default function Button({ children, style, type }) {
  return (
    <Container type={type} style={style}>
      <Text type={type}>{children}</Text>
      {type === 'primary' && <Line />}
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
