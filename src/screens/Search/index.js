import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setTitle } from '~/store/modules/title/actions';
import FailMessage from '~/components/FailMessage';

// import { Container } from './styles';

export default function Search({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(setTitle('Procurar na Globo Hub'));
    });
  }, [dispatch, navigation]);

  return <FailMessage />;
}

Search.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};
