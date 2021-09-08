import {
  GENRE_LIST_REQUEST,
  GENRE_LIST_SUCCESS,
  GENRE_LIST_FAIL,
} from "../constants/animeConstants";

export const genreListReducer = (state = { genres: [] }, action) => {
  switch (action.type) {
    case GENRE_LIST_REQUEST:
      return {
        loading: true,
        genres: [],
      };
    case GENRE_LIST_SUCCESS:
      return {
        loading: false,
        genres: action.payload.data.results,
      };
    case GENRE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
