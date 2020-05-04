import React from 'react';
import PropTypes from 'prop-types';

import { Container, TextInput, Icon } from './styles';

export default function Input({ icon, value, setValue, style, ...rest }) {
  return (
    <Container style={style}>
      <TextInput
        {...rest}
        value={value}
        hasIcon={!!icon}
        defaultValue={value}
        onChangeText={setValue}
      />
      {!!icon && <Icon name={icon} size={25} color="#ffffff50" />}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

Input.defaultProps = {
  icon: '',
  style: {},
};
