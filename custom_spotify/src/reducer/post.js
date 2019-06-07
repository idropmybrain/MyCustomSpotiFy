import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';

export const GET_OPTIONS_REQUESTED = 'users/OPTIONS_REQUESTED';
export const GET_OPTIONS_SUCCESS = 'users/OPTIONS_SUCCESS';
export const GET_OPTIONS_FAILURE = 'users/OPTIONS_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case GET_OPTIONS_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_OPTIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        data: action.result
      };
    }
    case GET_OPTIONS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        loaded: true
      };
    }
    
    default:
      return state;
  }
};

export const searchOptions = (id) => {
  return {
    types: [GET_OPTIONS_REQUESTED, GET_OPTIONS_SUCCESS, GET_OPTIONS_FAILURE],
    promise: client => client.get(`fakeapi/${id}`),
  };
};
