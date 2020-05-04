/* eslint-disable react/prop-types */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Search from '~/screens/Search';
import Friends from '~/screens/Friends';
import Me from '~/screens/Me';
import RouteFeedTabs from './RouteFeedTabs';

const Tab = createMaterialBottomTabNavigator();

export default function RouteBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      barStyle={{ backgroundColor: '#111' }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
        component={RouteFeedTabs}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarLabel: 'Procurar',
          tabBarIcon: ({ color }) => (
            <Icons name="magnify" color={color} size={26} />
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="Friends"
        options={{
          tabBarLabel: 'Amigos',
          tabBarIcon: ({ color }) => (
            <Icons name="account-multiple" color={color} size={26} />
          ),
        }}
        component={Friends}
      />
      <Tab.Screen
        name="Me"
        options={{
          tabBarLabel: 'Eu',
          tabBarIcon: ({ color }) => (
            <Icons name="account-circle" color={color} size={26} />
          ),
        }}
        component={Me}
      />
    </Tab.Navigator>
  );
}
