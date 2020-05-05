import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';
import RouteSlideShow from './RouteSlideShow';
import RouteBottomTab from './RouteBottomTab';

import SignIn from '~/screens/SignIn';
import SignOn from '~/screens/SignOn';
import ContaGloboHeader from '~/components/ContaGloboHeader';
import ChoseFavoritePlatform from '~/screens/ChoseFavoritePlatform';
import ChoseFavoriteCategory from '~/screens/ChoseFavoriteCategory';
import Notice from '~/screens/Notice';
import GloboPlayDescription from '~/screens/GloboPlayDescription';
import GloboPlayFilm from '~/screens/GloboPlayFilm';
import GloboSatPlayDescription from '~/screens/GloboSatPlayDescription';
import GloboSatPlayFilm from '~/screens/GloboSatPlayFilm';
import MeProfile from '~/screens/MeProfile';
import MeFavoriteCategory from '~/screens/MeFavoriteCategory';
import MeFavoritePlatform from '~/screens/MeFavoritePlatform';
import Header from '~/components/Header';
import GloboRoom from '~/screens/GloboRoom';
import GloboRoomList from '~/screens/GloboRoomList';

const Stack = createStackNavigator();

// import { Container } from './styles';

export default function RouteStacks() {
  const title = useSelector(state => state.title.title);

  return (
    <Stack.Navigator initialRouteName="SlideShow">
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
        options={{
          header: () => <Header title={title} />,
        }}
        component={RouteBottomTab}
      />

      <Stack.Screen
        name="Notice"
        options={{ header: () => <></> }}
        component={Notice}
      />

      <Stack.Screen
        name="GloboPlayDescription"
        options={{ header: () => <></> }}
        component={GloboPlayDescription}
      />
      <Stack.Screen
        name="GloboPlayFilm"
        options={{ header: () => <></> }}
        component={GloboPlayFilm}
      />

      <Stack.Screen
        name="GloboSatPlayDescription"
        options={{ header: () => <></> }}
        component={GloboSatPlayDescription}
      />
      <Stack.Screen
        name="GloboSatPlayFilm"
        options={{ header: () => <></> }}
        component={GloboSatPlayFilm}
      />

      <Stack.Screen
        name="MeProfile"
        options={{ header: () => <></> }}
        component={MeProfile}
      />
      <Stack.Screen
        name="MeFavoriteCategory"
        options={{ header: () => <></> }}
        component={MeFavoriteCategory}
      />
      <Stack.Screen
        name="MeFavoritePlatform"
        options={{ header: () => <></> }}
        component={MeFavoritePlatform}
      />

      <Stack.Screen
        name="GloboRoom"
        options={{ header: () => <Header title="Globo Rom" hasGoBack /> }}
        component={GloboRoom}
      />
      <Stack.Screen
        name="GloboRoomList"
        options={{ header: () => <></> }}
        component={GloboRoomList}
      />
    </Stack.Navigator>
  );
}
