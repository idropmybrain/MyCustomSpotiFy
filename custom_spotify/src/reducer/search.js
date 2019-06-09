export const GET_SEARCH_REQUESTED = 'users/SEARCH_REQUESTED';
export const GET_SEARCH_SUCCESS = 'users/SEARCH_SUCCESS';
export const GET_SEARCH_FAILURE = 'users/SEARCH_FAILURE';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case GET_SEARCH_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_SEARCH_SUCCESS: {
      console.log(action);
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        data: action.result.artists.items
      };
    }
    case GET_SEARCH_FAILURE: {
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

export const searchArtist = (id) => {
  return {
    types: [GET_SEARCH_REQUESTED, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE],
    promise: client => client.get(`/search?q=${id}&type=artist&limit=10`),
  };
};
