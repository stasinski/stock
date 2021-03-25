import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "@redux-saga/core/effects";

import { searchReducer } from "./search/searchReducer";
import { watchFetchSearchStockAsync } from "./search/saga";

const rootReducer = combineReducers({
  search: searchReducer,
});

export default function* rootSaga() {
  yield all([watchFetchSearchStockAsync()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
