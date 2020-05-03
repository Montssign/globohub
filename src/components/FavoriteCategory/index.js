import React, { useState } from 'react';
import produce from 'immer';

import FavoriteCategoryItem from '../FavoriteCategoryItem';

import { Container } from './styles';

export default function FavoriteCategory() {
  const [platforms, setPlatforms] = useState(() => [
    {
      name: 'Saúde',
      type: 'saude',
      chosed: false,
    },
    {
      name: 'Economia',
      type: 'economia',
      chosed: false,
    },
    {
      name: 'Política',
      type: 'politica',
      chosed: false,
    },
    {
      name: 'Mundo',
      type: 'mundo',
      chosed: false,
    },
    {
      name: 'Esporte',
      type: 'esporte',
      chosed: false,
    },
    {
      name: 'Tecnologia',
      type: 'tecnologia',
      chosed: false,
    },
    {
      name: 'Pop & Art',
      type: 'popeart',
      chosed: false,
    },
    {
      name: 'Educação',
      type: 'educacao',
      chosed: false,
    },
    {
      name: 'Carros',
      type: 'carros',
      chosed: false,
    },
    {
      name: 'Agro',
      type: 'agro',
      chosed: false,
    },
    {
      name: 'Bem estar',
      type: 'bemestar',
      chosed: false,
    },
    {
      name: 'Ciência',
      type: 'ciencia',
      chosed: false,
    },
    {
      name: 'Fato ou Fake',
      type: 'fatooufake',
      chosed: false,
    },
    {
      name: 'Natureza',
      type: 'natureza',
      chosed: false,
    },
    {
      name: 'Turismo & Viagem',
      type: 'turismoeviagem',
      chosed: false,
    },
    {
      name: 'Planeta Bizarro',
      type: 'planetabizarro',
      chosed: false,
    },
    {
      name: 'Olha que legal',
      type: 'olhaquelegal',
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
      keyExtractor={item => String(item.type)}
      numColumns={2}
      renderItem={({ item }) => (
        <FavoriteCategoryItem
          key={item.type}
          title={item.name}
          chosed={item.chosed}
          onPress={() => toggleChosed(item)}
        />
      )}
    />
  );
}
