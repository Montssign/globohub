import React from 'react';
import PropTypes from 'prop-types';

import { Button, Text } from './styles';

export default function ContaGloboButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      <Text>{children}</Text>
    </Button>
  );
}

ContaGloboButton.propTypes = {
  children: PropTypes.string.isRequired,
};
