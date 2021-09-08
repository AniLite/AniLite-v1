import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_SUCCESS,
  ANIME_LIST_FAIL,
  ANIME_DETAIL_REQUEST,
  ANIME_DETAIL_SUCCESS,
  ANIME_DETAIL_FAIL,
} from "../constants/animeConstants";

export const animeListReducer = (state = { animes: [] }, action) => {
  switch (action.type) {
    case ANIME_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        animes: [],
      };
    case ANIME_LIST_SUCCESS:
      return {
        loading: false,
        animes: action.payload.data.results,
      };
    case ANIME_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const animeDetailReducer = (state = { anime: [] }, action) => {
  switch (action.type) {
    case ANIME_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        anime: [],
      };
    case ANIME_DETAIL_SUCCESS:
      return {
        loading: false,
        anime: action.payload.data,
      };
    case ANIME_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
