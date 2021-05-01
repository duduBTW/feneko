import { createStore } from "redux";
import rootReducer from "./reducers";

export const store = createStore(
  rootReducer,
  process.browser &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
