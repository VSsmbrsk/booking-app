import { combineReducers } from "redux";
import { routerReducer } from "./history";
import destinations from "../features/destinations/reducer";
import hotels from "../features/hotels/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  destinations,
  hotels,
});

export default rootReducer;
