import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { animeDetailReducer, animeListReducer } from "./reducers/animeReducers";
import {
  characterDetailReducer,
  characterListReducer,
} from "./reducers/characterReducers";
import { genreListReducer } from "./reducers/genreReducers";

const reducer = combineReducers({
  animeList: animeListReducer,
  animeDetail: animeDetailReducer,
  characterList: characterListReducer,
  characterDetail: characterDetailReducer,
  genreList: genreListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
