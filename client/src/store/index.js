import { createStore } from "redux";
import rootReducer from "./rootReducer";

export * from "./shop";

export default createStore(
  rootReducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
