const initialState = {
  list: [],
  loading: false,
  error: "",
  filters: null,
  total: 0,
  page: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "HOTELS/SEARCH_REQUEST":
      return { ...state, loading: true, error: "" };

    case "HOTELS/SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        list: action.payload.hotels,
        filters: action.payload.filters,
        total: action.payload.total,
        page: action.payload.page,
      };

    case "HOTELS/SEARCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Failed to load hotels. Please try again.",
      };

    default:
      return state;
  }
}
