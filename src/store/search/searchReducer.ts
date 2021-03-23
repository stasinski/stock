import {
  actionTypes,
  IinitialState,
  initialState,
  SET_SEARCHSTOCKS_ASYNC,
} from "./searchManager";

export const searchReducer = (
  state: IinitialState = initialState,
  action: actionTypes
) => {
  if (action.type === SET_SEARCHSTOCKS_ASYNC) {
    const { payload } = action;
    return {
      ...state,
      searchStock: payload.searchStock,
    };
  }

  return state;
};
