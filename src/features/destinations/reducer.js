const initialState = {
  list: [],
  loading: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "DESTINATIONS/LOAD_REQUEST":
      return { ...state, loading: true, error: "" };

    case "DESTINATIONS/LOAD_SUCCESS":
      return { ...state, loading: false, list: action.payload };

    case "DESTINATIONS/LOAD_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Unable to load destinations. Please try again.",
      };

    default:
      return state;
  }
}
