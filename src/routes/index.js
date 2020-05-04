import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RouteStacks from './RouteStacks';

export default function Routes() {
  return (
    <NavigationContainer
      theme={{ dark: true, colors: { background: '#222222', text: '#f8f7fd' } }}
    >
      <RouteStacks />
    </NavigationContainer>
  );
}
