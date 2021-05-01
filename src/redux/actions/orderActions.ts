import { orderType } from "../reducers/orderReducer";

export type Action = { type: "SET_TYPES"; payload: orderType[] };

export const setTypes = (type: orderType[]): Action => ({
  type: "SET_TYPES",
  payload: type,
});
