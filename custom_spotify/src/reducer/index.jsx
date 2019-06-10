import { combineReducers } from 'redux';
// import posts from './post';
import search from './search';
import album from './album';
import tracks from './tracks';

const appReducer = combineReducers({
  // posts,
  search,
  album,
  tracks,
});

// Setup root reducer
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
