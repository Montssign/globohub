import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SlideContainer from '~/components/SlideContainer';

import SlideShow1 from '~/screens/SlideShow1';
import SlideShow2 from '~/screens/SlideShow2';
import SlideShow3 from '~/screens/SlideShow3';

const Tab = createMaterialTopTabNavigator();

export default function RouteSlideShow({ navigation }) {
  const activeTab = useSelector(state => state.slideShow.currentStep);

  useEffect(() => {
    if (activeTab === 1) {
      navigation.navigate('SlideShow1');
    } else if (activeTab === 2) {
      navigation.navigate('SlideShow2');
    } else if (activeTab === 3) {
      navigation.navigate('SlideShow3');
    }
  }, [activeTab, navigation]);

  return (
    <>
      <Tab.Navigator tabBarOptions={{ style: { height: 0 } }}>
        <Tab.Screen name="SlideShow1" component={SlideShow1} />
        <Tab.Screen name="SlideShow2" component={SlideShow2} />
        <Tab.Screen name="SlideShow3" component={SlideShow3} />
      </Tab.Navigator>
      <SlideContainer />
    </>
  );
}

RouteSlideShow.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
