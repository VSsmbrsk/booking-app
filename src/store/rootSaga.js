import { all } from "redux-saga/effects";
import destinationsSaga from "../features/destinations/saga";
import hotelsSaga from "../features/hotels/saga";

export default function* rootSaga() {
  yield all([destinationsSaga(), hotelsSaga()]);
}
