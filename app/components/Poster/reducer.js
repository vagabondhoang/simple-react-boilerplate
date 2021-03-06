import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from '../../components/Poster/constants';

const initialState = {
  isFetching: false,
  item: {},
  error: {},
};

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        item: action.data,
      }
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default movieDetail
