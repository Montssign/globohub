import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import Background from '~/components/Background';
import { setTitle } from '~/store/modules/title/actions';

// import { Container } from './styles';

export default function Friends({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(setTitle('Meus Amigos'));
    });
  }, [dispatch, navigation]);

  return (
    <View>
      <Background>{/** resto */}</Background>
    </View>
  );
}

Friends.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};
