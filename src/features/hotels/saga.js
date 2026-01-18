import { call, put, takeLatest, delay } from "redux-saga/effects";
import { api, endpoints } from "../../api/client";
import { push } from "redux-first-history";
import { mockHotels } from "../../api/mocks";

const HOTELS_LIMIT = Number(import.meta.env.VITE_HOTELS_LIMIT) || 10;

const ENABLE_MOCKS = import.meta.env.VITE_ENABLE_MOCKS === "true";

function* searchHotelsSaga(action) {
  try {
    const page = Number(action.payload?.page) || 1;
    const limit = HOTELS_LIMIT;

    const selectedCity = action.payload?.destination;

    let hotelsData;
    let totalCount;

    if (ENABLE_MOCKS) {
      yield delay(500);

      let filteredHotels = mockHotels;

      const isAllSelected =
        !selectedCity || selectedCity === "All available hotels";

      if (!isAllSelected) {
        filteredHotels = mockHotels.filter(
          (hotel) => hotel.city === selectedCity,
        );
      }

      const start = (page - 1) * limit;
      hotelsData = filteredHotels.slice(start, start + limit);
      totalCount = filteredHotels.length;
    } else {
      const params = { _start: (page - 1) * limit, _limit: limit };

      if (selectedCity && selectedCity !== "All available hotels") {
        params.city = selectedCity;
      }

      const response = yield call(api.get, endpoints.hotels, { params });

      const countParams =
        selectedCity && selectedCity !== "All available hotels"
          ? { city: selectedCity }
          : {};
      const countResponse = yield call(api.get, endpoints.hotels, {
        params: countParams,
      });

      hotelsData = response.data;
      totalCount = countResponse.data.length;
    }

    yield put({
      type: "HOTELS/SEARCH_SUCCESS",
      payload: {
        hotels: hotelsData,
        total: totalCount,
        page: page,
        filters: action.payload,
      },
    });

    yield put(push("/hotels"));
  } catch (error) {
    yield put({ type: "HOTELS/SEARCH_FAILURE" });
  }
}
export default function* hotelsSaga() {
  yield takeLatest("HOTELS/SEARCH_REQUEST", searchHotelsSaga);
}
