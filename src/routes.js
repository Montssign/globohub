import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SlideShow1 from './screens/SlideShow1';
import SlideShow2 from './screens/SlideShow2';
import SlideShow3 from './screens/SlideShow3';
import { StepContainer, Indicator } from './screens/SlideShow1/styles';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function SlideShow() {
  return (
    <>
      <Tab.Navigator tabBarOptions={{ style: { height: 0 } }}>
        <Tab.Screen name="SlideShow1" component={SlideShow1} />
        <Tab.Screen name="SlideShow2" component={SlideShow2} />
        <Tab.Screen name="SlideShow3" component={SlideShow3} />
      </Tab.Navigator>
      <StepContainer>
        <Indicator active />
        <Indicator />
        <Indicator />
      </StepContainer>
    </>
  );
}

export default function Routes() {
  return (
    <NavigationContainer
      theme={{ dark: true, colors: { background: '#222222', text: '#f8f7fd' } }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="SlideShow"
          options={{ header: () => <></> }}
          component={SlideShow}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
