import { ISearchStock } from "../../types";

export interface IinitialState {
  searchStock: ISearchStock[];
  activeStock: string | null;
  isFetching: boolean;
}

export const initialState: IinitialState = {
  searchStock: [],
  activeStock: null,
  isFetching: false,
};

export const SET_SEARCHSTOCKS = "SET_SEARCHSTOCKS";
export const SET_SEARCHSTOCKS_ASYNC = "SET_SEARCHSTOCKS_ASYNC";
export const SET_ACTIVE_STOCK = "SET_ACTIVE_STOCK";

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

interface SetActiveStockTypes {
  type: typeof SET_ACTIVE_STOCK;
  payload: {
    activeStock: string | null;
  };
}

export const setActiveStock = ({
  activeStock,
}: {
  activeStock: string | null;
}): SetActiveStockTypes => ({
  type: SET_ACTIVE_STOCK,
  payload: { activeStock: activeStock },
});

export type actionTypes =
  | SetSearchStockTypes
  | SetSearchStockAsyncTypes
  | SetActiveStockTypes;
