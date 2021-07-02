import { OrderItemModel, orderType } from "../reducers/orderReducer";

export type Action =
  | { type: "SET_TYPES"; payload: string[] }
  | { type: "ADD_ARTISTS"; payload: OrderItemModel[] }
  | {
      type: "SET_DESCRIPTION";
      payload: Partial<{ [K in orderType]: string }>;
    }
  | { type: "REMOVE_ARTIST"; payload: string };

export const setTypes = (type: string[]): Action => ({
  type: "SET_TYPES",
  payload: type,
});

export const addArtist = (type: OrderItemModel[]): Action => ({
  type: "ADD_ARTISTS",
  payload: type,
});

export const removeArtist = (type: string): Action => ({
  type: "REMOVE_ARTIST",
  payload: type,
});

export const setDesc = (
  type: Partial<{ [K in orderType]: string }>
): Action => ({
  type: "SET_DESCRIPTION",
  payload: type,
});
