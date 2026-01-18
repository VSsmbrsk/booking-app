import { call, put, takeLatest, delay } from "redux-saga/effects";
import { api, endpoints } from "../../api/client";
import { mockDestinations } from "../../api/mocks";

const ENABLE_MOCKS = import.meta.env.VITE_ENABLE_MOCKS === "true";

function* loadDestinationsSaga() {
  try {
    let data;

    if (ENABLE_MOCKS) {
      yield delay(300);
      data = mockDestinations;
    } else {
      const response = yield call(api.get, endpoints.destinations);
      data = response.data;
    }

    yield put({
      type: "DESTINATIONS/LOAD_SUCCESS",
      payload: data,
    });
  } catch (error) {
    yield put({
      type: "DESTINATIONS/LOAD_FAILURE",
      payload: "Failed to load destinations",
    });
  }
}

export default function* destinationsSaga() {
  yield takeLatest("DESTINATIONS/LOAD_REQUEST", loadDestinationsSaga);
}
