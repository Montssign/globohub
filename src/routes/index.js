import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RouteSlideShow from './RouteSlideShow';
import RouteBottomTab from './RouteBottomTab';

import SignIn from '~/screens/SignIn';
import SignOn from '~/screens/SignOn';
import ContaGloboHeader from '~/components/ContaGloboHeader';
import ChoseFavoritePlatform from '~/screens/ChoseFavoritePlatform';
import ChoseFavoriteCategory from '~/screens/ChoseFavoriteCategory';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer
      theme={{ dark: true, colors: { background: '#222222', text: '#f8f7fd' } }}
    >
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          name="SlideShow"
          options={{ header: () => <></> }}
          component={RouteSlideShow}
        />
        <Stack.Screen
          name="SignIn"
          options={{ header: ContaGloboHeader }}
          component={SignIn}
        />
        <Stack.Screen
          name="SignOn"
          options={{ header: ContaGloboHeader }}
          component={SignOn}
        />
        <Stack.Screen
          name="ChosePlatform"
          options={{ header: () => <></> }}
          component={ChoseFavoritePlatform}
        />
        <Stack.Screen
          name="ChoseCategory"
          options={{ header: () => <></> }}
          component={ChoseFavoriteCategory}
        />
        <Stack.Screen
          name="App"
          options={{ header: () => <></> }}
          component={RouteBottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
