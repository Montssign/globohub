import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TextInput, IconButton } from './styles';

const ContaGloboInput = ({
  value,
  setValue,
  type,
  keyboardType,
  secureTextEntry,
  ...rest
}) => {
  const [passIcon, setPassIcon] = useState('visibility');

  function handleTogglePassword() {
    setPassIcon(passIcon === 'visibility' ? 'visibility-off' : 'visibility');
  }

  const inputType = useMemo(() => {
    if (type === 'email') {
      return 'emailAddress';
    }
    if (type === 'password') {
      return 'password';
    }
    return 'none';
  }, [type]);

  return (
    <View>
      <TextInput
        {...rest}
        defaultValue={value}
        textContentType={inputType}
        value={value}
        secureTextEntry={passIcon === 'visibility' ? secureTextEntry : false}
        keyboardType={keyboardType}
        onChangeText={setValue}
      />
      {type === 'password' && (
        <IconButton onPress={handleTogglePassword}>
          <Icon name={passIcon} color="#ADADAD" size={25} />
        </IconButton>
      )}
    </View>
  );
};

ContaGloboInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

ContaGloboInput.defaultProps = {
  type: 'text',
  keyboardType: 'default',
  secureTextEntry: false,
};

export default ContaGloboInput;
