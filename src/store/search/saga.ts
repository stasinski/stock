import { put, takeLatest } from "redux-saga/effects";
import { stockApi } from "../../api/stock";
import { SET_SEARCHSTOCKS, setSearchStockAsync } from "./searchManager";

export function* fetchSearchStockAsync({ payload: { searchValue } }: any) {
  try {
    console.log(searchValue);
    yield put(setSearchStockAsync({ bestMatches: [] }));
  } catch (error) {
    console.log(error);
  }
  // const { data } = await stockApi.get("", {
  //   params: {
  //     function: "SYMBOL_SEARCH",
  //     keywords: searchValue,
  //   },
  // });
}

export function* watchFetchSearchStockAsync() {
  yield takeLatest(SET_SEARCHSTOCKS, fetchSearchStockAsync);
}
