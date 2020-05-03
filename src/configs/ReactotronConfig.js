import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

import { REACTOTRON_HOST } from 'react-native-dotenv';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: REACTOTRON_HOST,
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
