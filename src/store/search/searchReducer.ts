import {
  actionTypes,
  IinitialState,
  initialState,
  SET_ACTIVE_STOCK,
  SET_SEARCHSTOCKS,
  SET_SEARCHSTOCKS_ASYNC,
} from "./searchManager";

export const searchReducer = (
  state: IinitialState = initialState,
  action: actionTypes
) => {
  if (action.type === SET_SEARCHSTOCKS) {
    return {
      ...state,
      isFetching: true,
    };
  }
  if (action.type === SET_SEARCHSTOCKS_ASYNC) {
    const { payload } = action;
    return {
      ...state,
      searchStock: payload.searchStock,
      isFetching: false,
    };
  }
  if (action.type === SET_ACTIVE_STOCK) {
    const { payload } = action;
    return {
      ...state,
      activeStock: payload.activeStock,
      isFetching: false,
    };
  }

  return state;
};
