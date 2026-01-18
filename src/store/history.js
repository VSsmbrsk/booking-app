import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

export const { routerReducer, routerMiddleware, createReduxHistory } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    basename: "/booking-app",
  });
