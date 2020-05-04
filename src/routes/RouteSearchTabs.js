import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Search from '~/screens/Search';
import SearchGloboPlay from '~/screens/SearchGloboPlay';
import SearchGloboRoom from '~/screens/SearchGloboRoom';

const Tab = createMaterialTopTabNavigator();

export default function RouteSearchTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { height: 32 },
        tabStyle: {
          maxHeight: 32,
          padding: 0,
          paddingHorizontal: 8,
          margin: 3,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        },
      }}
    >
      <Tab.Screen
        name="Search"
        options={{ title: 'Procurar' }}
        initialParams={{ type: 'Feed' }}
        component={Search}
      />
      <Tab.Screen
        name="SearchGloboPlay"
        options={{ title: 'GloboPlay' }}
        initialParams={{ type: 'Feed' }}
        component={SearchGloboPlay}
      />
      <Tab.Screen
        name="SearchGloboRoom"
        options={{ title: 'GloboRoom' }}
        initialParams={{ type: 'Feed' }}
        component={SearchGloboRoom}
      />
    </Tab.Navigator>
  );
}
