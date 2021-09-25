import {
  GENRE_LIST_REQUEST,
  GENRE_LIST_SUCCESS,
  GENRE_LIST_FAIL,
} from "../constants/animeConstants";
import axios from "axios";

export const listGenres = () => async (dispatch) => {
  try {
    dispatch({ type: GENRE_LIST_REQUEST });
    const data = await axios.get(
      "https://anilite-api-v1.herokuapp.com/api/genre/?limit=1000"
    );
    dispatch({ type: GENRE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GENRE_LIST_FAIL, payload: error.message });
  }
};
