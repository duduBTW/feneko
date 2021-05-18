import { Tags, ArtistaModelo } from "@/src/data";
import { Action } from "../actions/orderActions";

export type orderType = "art" | "vtuber" | "design";

export interface OrderItemModel {
  type: Tags;
  id: string;
  artist: ArtistaModelo;
}

export interface OrderModel {
  orders: orderType[];
  otderItems: OrderItemModel[];
  descriptions: { [K in orderType]: string };
}

const defaultState: OrderModel = {
  orders: [],
  otderItems: [],
  descriptions: {
    art: "",
    design: "",
    vtuber: "",
  },
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
    case "ADD_ARTISTS":
      return {
        ...state,
        otderItems: [...state.otderItems, ...action.payload],
      };
    case "REMOVE_ARTIST":
      return {
        ...state,
        otderItems: state.otderItems.filter((oI) => oI.id !== action.payload),
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        descriptions: { ...state.descriptions, ...action.payload },
      };
    default:
      return state;
  }
};

export default orderReducer;
