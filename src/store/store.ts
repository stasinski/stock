import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";

import { searchReducer } from "./search/searchReducer";
import { all } from "@redux-saga/core/effects";
import { watchFetchSearchStockAsync } from "./search/saga";

const rootReducer = combineReducers({
  search: searchReducer,
});

export default function* rootSaga() {
  yield all([watchFetchSearchStockAsync()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
