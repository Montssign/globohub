/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { name as appName } from './app.json';
import App from './src';

Geolocation.setRNConfiguration({});

AppRegistry.registerComponent(appName, () => App);
