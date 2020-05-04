import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTitle } from '~/store/modules/title/actions';

// import { Container } from './styles';

export default function Me({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(setTitle('Meu Perfil'));
    });
  }, [dispatch, navigation]);

  return (
    <View>
      <Text>Eu</Text>
    </View>
  );
}

Me.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};
