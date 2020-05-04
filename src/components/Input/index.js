import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Input({ icon, value, setValue }) {
  return (
    <View>
      <Text>Input</Text>
    </View>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

Input.defaultProps = {
  icon: '',
};
