import { Action } from "../actions/orderActions";

export type orderType = "art" | "vtuber" | "design";

export interface OrderModel {
  orders: orderType[];
}

const defaultState: OrderModel = {
  orders: [],
};

const orderReducer = (
  state: OrderModel = defaultState,
  action: Action
): OrderModel => {
  switch (action.type) {
    case "SET_TYPES":
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
