import { Action } from "../actions/globalActions";

export type globalType = "art" | "vtuber" | "design";

export interface GlobalModel {
  loc: number;
}

const defaultState: GlobalModel = {
  loc: 0,
};

const globalReducer = (
  state: GlobalModel = defaultState,
  action: Action
): GlobalModel => {
  switch (action.type) {
    case "SET_LOC":
      return {
        ...state,
        loc: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
