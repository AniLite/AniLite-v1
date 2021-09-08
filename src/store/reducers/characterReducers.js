import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_DETAIL_REQUEST,
  CHARACTER_DETAIL_SUCCESS,
  CHARACTER_DETAIL_FAIL,
} from "../constants/characterConstants";

export const characterListReducer = (state = { characters: [] }, action) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        characters: [],
      };
    case CHARACTER_LIST_SUCCESS:
      return {
        loading: false,
        characters: action.payload.data.results,
      };
    case CHARACTER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const characterDetailReducer = (state = { character: {} }, action) => {
  switch (action.type) {
    case CHARACTER_DETAIL_REQUEST:
      return {
        loading: true,
        character: {},
      };
    case CHARACTER_DETAIL_SUCCESS:
      return {
        loading: false,
        character: action.payload,
      };
    case CHARACTER_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
