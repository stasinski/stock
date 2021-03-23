import { ISearchStock } from "../../types";

export interface IinitialState {
  searchStock: ISearchStock[];
}

export const initialState: IinitialState = {
  searchStock: [],
};

export const SET_SEARCHSTOCKS = "SET_SEARCHSTOCKS";
export const SET_SEARCHSTOCKS_ASYNC = "SET_SEARCHSTOCKS_ASYNC";

interface SetSearchStockTypes {
  type: typeof SET_SEARCHSTOCKS;
  payload: {};
}

export const setSearchStock = ({
  searchValue,
}: {
  searchValue: string;
}): SetSearchStockTypes => ({
  type: SET_SEARCHSTOCKS,
  payload: { searchValue },
});

interface SetSearchStockAsyncTypes {
  type: typeof SET_SEARCHSTOCKS_ASYNC;
  payload: {
    searchStock: ISearchStock[];
  };
}

export const setSearchStockAsync = ({
  bestMatches,
}: {
  bestMatches: ISearchStock[];
}): SetSearchStockAsyncTypes => ({
  type: SET_SEARCHSTOCKS_ASYNC,
  payload: {
    searchStock: bestMatches,
  },
});

export type actionTypes = SetSearchStockTypes | SetSearchStockAsyncTypes;
