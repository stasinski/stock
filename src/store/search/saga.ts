import { put, takeLatest } from "redux-saga/effects";
import { stockApi } from "../../api/stock";
import { SET_SEARCHSTOCKS, setSearchStockAsync } from "./searchManager";

export function* fetchSearchStockAsync({ payload: { searchValue } }: any) {
  try {
    const { data } = yield stockApi.get("", {
      params: {
        function: "SYMBOL_SEARCH",
        keywords: searchValue,
      },
    });
    data.bestMatches = data.bestMatches.map(
      (obj: { [key: string]: string }) => {
        const newObj: { [key: string]: string } = {};
        for (let key in obj) {
          newObj[key.slice(3)] = obj[key];
        }
        return newObj;
      }
    );
    yield put(setSearchStockAsync(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSearchStockAsync() {
  yield takeLatest(SET_SEARCHSTOCKS, fetchSearchStockAsync);
}
