import { createReduxHistoryContext } from "redux-first-history";
import { createHashHistory } from "history";

export const { routerReducer, routerMiddleware, createReduxHistory } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });
