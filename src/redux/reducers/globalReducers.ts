import { Action } from "../actions/globalActions";

export type globalType = "art" | "vtuber" | "design";

export interface GlobalModel {
  loc: number;
  artistModal: string[] | null;
}

const defaultState: GlobalModel = {
  loc: 0,
  artistModal: null,
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
    case "SET_ARTIST_MODAL":
      return {
        ...state,
        artistModal: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
