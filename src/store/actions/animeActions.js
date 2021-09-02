import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_SUCCESS,
  ANIME_LIST_FAIL,
  ANIME_DETAIL_REQUEST,
  ANIME_DETAIL_SUCCESS,
  ANIME_DETAIL_FAIL,
} from "../constants/animeConstants";

import axios from "axios";

export const listAnime = () => async (dispatch) => {
  try {
    dispatch({ type: ANIME_LIST_REQUEST });
    const data = await axios.get("http://localhost:8000/api/anime/");
    dispatch({ type: ANIME_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ANIME_LIST_FAIL, payload: error.message });
  }
};

export const listAnimeDetail = (slug) => async (dispatch) => {
  try {
    dispatch({ type: ANIME_DETAIL_REQUEST });
    const data = await axios.get(`http://localhost:8000/api/anime/${slug}`);
    dispatch({ type: ANIME_DETAIL_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: ANIME_DETAIL_FAIL, payload: error.message });
  }
};
