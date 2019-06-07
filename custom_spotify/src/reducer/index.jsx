import { combineReducers } from 'redux';
import posts from './post';

const appReducer = combineReducers({
  posts,
});

// Setup root reducer
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
