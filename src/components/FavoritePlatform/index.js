import React, { useState } from 'react';
import produce from 'immer';

import FavoritePlatformItem from '../FavoritePlatformItem';

import globoplayIcon from '~/assets/images/globoplay.png';
import g1Icon from '~/assets/images/g1.png';
import globoesporteIcon from '~/assets/images/globoesporte.png';
import gshowIcon from '~/assets/images/gshow.png';
import globosatIcon from '~/assets/images/globosat.png';
import techtudoIcon from '~/assets/images/techtudo.png';

import { Container } from './styles';

export default function FavoritePlatform() {
  const [platforms, setPlatforms] = useState(() => [
    {
      name: 'globoplay',
      type: 'Entretenimento',
      image: globoplayIcon,
      chosed: false,
    },
    {
      name: 'G1',
      type: 'Notícias',
      image: g1Icon,
      chosed: false,
    },
    {
      name: 'globoesporte',
      type: 'Esportes',
      image: globoesporteIcon,
      chosed: false,
    },
    {
      name: 'gshow',
      type: 'Entretenimento',
      image: gshowIcon,
      chosed: false,
    },
    {
      name: 'globosat',
      type: 'Entretenimento',
      image: globosatIcon,
      chosed: false,
    },
    {
      name: 'techtudo',
      type: 'Tecnologia',
      image: techtudoIcon,
      chosed: false,
    },
  ]);

  function toggleChosed(platform) {
    setPlatforms(
      produce(platforms, draft => {
        const index = draft.findIndex(item => item.name === platform.name);
        draft[index].chosed = !draft[index].chosed;
      })
    );
  }

  return (
    <Container
      data={platforms}
      keyExtractor={item => String(item.name)}
      numColumns={2}
      renderItem={({ item }) => (
        <FavoritePlatformItem
          key={item.name}
          title={item.type}
          image={item.image}
          chosed={item.chosed}
          onPress={() => toggleChosed(item)}
        />
      )}
    />
  );
}
