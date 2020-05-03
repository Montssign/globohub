import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import FavoritePlatform from '~/components/FavoritePlatform';
import Background from '~/components/Background';

import logo from '~/assets/images/logo.png';

import {
  Container,
  Header,
  Image,
  SmallText,
  WhiteText,
  Bottom,
  Button,
} from './styles';

export default function ChoseFavoritePlatform({ navigation }) {
  return (
    <Background>
      <Header>
        <Image source={logo} style={{ resizeMode: 'contain' }} />
        <SmallText>Escolha suas</SmallText>
        <WhiteText>Plataformas Favoritas</WhiteText>
      </Header>
      <Container>
        <FavoritePlatform />
      </Container>
      <Bottom>
        <Button style={{ opacity: 0 }}>
          <Icon name="chevron-left" size={30} />
        </Button>
        <Button onPress={() => navigation.navigate('ChoseCategory')}>
          <Icon name="chevron-right" size={30} />
        </Button>
      </Bottom>
    </Background>
  );
}

ChoseFavoritePlatform.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
