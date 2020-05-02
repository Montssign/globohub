import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SlideShow1 from './screens/SlideShow1';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SlideShow1"
          options={{ header: () => <></> }}
          component={SlideShow1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
