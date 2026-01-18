export const { routerReducer, routerMiddleware, createReduxHistory } =
  createReduxHistoryContext({
    history: createBrowserHistory(),

    basename: import.meta.env.BASE_URL.replace(/\/$/, ""),
  });
