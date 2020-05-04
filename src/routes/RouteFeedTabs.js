import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feed from '~/screens/Feed';

const Tab = createMaterialTopTabNavigator();

export default function RouteFeedTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { height: 32 },
        scrollEnabled: true,
        tabStyle: {
          maxHeight: 32,
          padding: 0,
          paddingHorizontal: 8,
          margin: 3,
          justifyContent: 'flex-start',
          width: 'auto',
          alignItems: 'stretch',
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        initialParams={{ type: 'Feed' }}
        component={Feed}
      />
      <Tab.Screen name="G1" initialParams={{ type: 'G1' }} component={Feed} />
      <Tab.Screen
        name="GloboPlay"
        initialParams={{ type: 'GloboPlay' }}
        component={Feed}
      />
      <Tab.Screen
        name="GShow"
        initialParams={{ type: 'GShow' }}
        component={Feed}
      />
      <Tab.Screen
        name="Globoesporte"
        initialParams={{ type: 'Globoesporte' }}
        component={Feed}
      />
      <Tab.Screen
        name="GlobosatPlay"
        initialParams={{ type: 'GlobosatPlay' }}
        component={Feed}
      />
      <Tab.Screen
        name="TechTudo"
        initialParams={{ type: 'TechTudo' }}
        component={Feed}
      />
    </Tab.Navigator>
  );
}
