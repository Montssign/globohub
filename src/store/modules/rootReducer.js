import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import slideShow from './slideShow/reducer';
import title from './title/reducer';

export default combineReducers({
  auth,
  user,
  slideShow,
  title,
});
