import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Text } from 'react-native';
import FavoriteCategory from '~/components/FavoriteCategory';
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

export default function ChoseFavoriteCategory({ navigation }) {
  return (
    <Background>
      <Header>
        <Image source={logo} style={{ resizeMode: 'contain' }} />
        <SmallText>Escolha suas</SmallText>
        <WhiteText>Categorias Favoritas</WhiteText>
      </Header>
      <Container>
        <FavoriteCategory />
      </Container>
      <Bottom>
        <Button onPress={() => navigation.navigate('ChosePlatform')}>
          <Text>Voltar</Text>
          <Icon name="chevron-left" size={30} />
        </Button>
        <Button>
          <Text>Avançar</Text>
          <Icon name="chevron-right" size={30} />
        </Button>
      </Bottom>
    </Background>
  );
}

ChoseFavoriteCategory.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
