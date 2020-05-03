import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RouteSlideShow from './RouteSlideShow';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer
      theme={{ dark: true, colors: { background: '#222222', text: '#f8f7fd' } }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="SlideShow"
          options={{ header: () => <></> }}
          component={RouteSlideShow}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
