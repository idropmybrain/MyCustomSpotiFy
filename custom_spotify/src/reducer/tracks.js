export const GET_TRACK_REQUESTED = 'users/TRACK_REQUESTED';
export const GET_TRACK_SUCCESS = 'users/TRACK_SUCCESS';
export const GET_TRACK_FAILURE = 'users/TRACK_FAILURE';
export const SET_SELECTEDTRACK_SUCCESS = 'users/SELECTEDTRACK_SUCCESS';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  data: null,
  selectedArtist: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case GET_TRACK_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_TRACK_SUCCESS: {
      console.log(action);
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        data: action.result
      };
    }
    case GET_TRACK_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        loaded: true
      };
    }
    
    case SET_SELECTEDTRACK_SUCCESS: {
      console.log(action);
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        selectedArtist: action.payload
      };
    }
    
    default:
      return state;
  }
};

export const getTracks = (item) => {
  return {
    types: [GET_TRACK_REQUESTED, GET_TRACK_SUCCESS, GET_TRACK_FAILURE],
    promise: client => client.get(`/albums/${item.id}/tracks`),
    
  };
};

export const setTrack = (item) => {
  return  {
      type: SET_SELECTEDTRACK_SUCCESS,
      payload: item
    };
  }
