import { combineReducers } from "redux";
import orderReducer, { OrderModel } from "./orderReducer";

export interface RootModel {
  order: OrderModel;
}

export default combineReducers<RootModel>({
  order: orderReducer,
});
