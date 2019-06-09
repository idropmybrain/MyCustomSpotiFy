export const GET_ALBUM_REQUESTED = 'users/ALBUM_REQUESTED';
export const GET_ALBUM_SUCCESS = 'users/ALBUM_SUCCESS';
export const GET_ALBUM_FAILURE = 'users/ALBUM_FAILURE';
export const SET_SELECTEDALBUM_SUCCESS = 'users/SELECTEDALBUM_SUCCESS';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  data: null,
  selectedArtist: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case GET_ALBUM_REQUESTED: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case GET_ALBUM_SUCCESS: {
      console.log(action);
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        data: action.result
      };
    }
    case GET_ALBUM_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        loaded: true
      };
    }
    
    case SET_SELECTEDALBUM_SUCCESS: {
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

export const getAlbum = (item) => {
  return {
    types: [GET_ALBUM_REQUESTED, GET_ALBUM_SUCCESS, GET_ALBUM_FAILURE],
    promise: client => client.get(`/artists/${item.id}/albums`),
    
  };
};

export const setArtist = (item) => {
  return  {
      type: SET_SELECTEDALBUM_SUCCESS,
      payload: item
    };
  }
