import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_SUCCESS,
  ANIME_LIST_FAIL,
  ANIME_DETAIL_REQUEST,
  ANIME_DETAIL_SUCCESS,
  ANIME_DETAIL_FAIL,
} from "../constants/animeConstants";

import axios from "axios";

export const listAnime = (param) => async (dispatch) => {
  try {
    dispatch({ type: ANIME_LIST_REQUEST });
    const data = await axios.get(
      `https://anilite-api-v1.herokuapp.com/api/anime/?limit=1000&${param}`
    );
    dispatch({ type: ANIME_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ANIME_LIST_FAIL, payload: error.message });
  }
};

export const listAnimeDetail = (slug) => async (dispatch) => {
  try {
    dispatch({ type: ANIME_DETAIL_REQUEST });
    const data = await axios.get(
      `https://anilite-api-v1.herokuapp.com/api/anime/${slug}`
    );
    dispatch({ type: ANIME_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ANIME_DETAIL_FAIL, payload: error.message });
  }
};
