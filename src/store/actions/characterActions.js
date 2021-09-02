import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_DETAIL_REQUEST,
  CHARACTER_DETAIL_SUCCESS,
  CHARACTER_DETAIL_FAIL,
} from "../constants/characterConstants";

import axios from "axios";

export const listCharacter = () => async (dispatch) => {
  try {
    dispatch({ type: CHARACTER_LIST_REQUEST });
    const data = await axios.get("http://localhost:8000/api/character/");
    dispatch({ type: CHARACTER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CHARACTER_LIST_FAIL, payload: error.message });
  }
};

export const listCharacterDetail = (slug) => async (dispatch) => {
  try {
    dispatch({ type: CHARACTER_DETAIL_REQUEST });
    const data = await axios.get(`http://localhost:8000/api/character/${slug}`);
    dispatch({ type: CHARACTER_DETAIL_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: CHARACTER_DETAIL_FAIL, payload: error.message });
  }
};
