import { combineReducers } from "redux";
import globalReducer, { GlobalModel } from "./globalReducers";
import orderReducer, { OrderModel } from "./orderReducer";

export interface RootModel {
  order: OrderModel;
  global: GlobalModel;
}

export default combineReducers<RootModel>({
  order: orderReducer,
  global: globalReducer,
});
