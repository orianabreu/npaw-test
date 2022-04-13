export const initialState = {
  inputSearch: "",
  searchResults: [],
  searchDone: false,
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "search": {
      return {
        ...state,
        inputSearch: action.payload,
      };
    }
    case "get-api-data": {
      return {
        ...state,
        searchResults: action.data,
      };
    }
    case "empy-inputfield": {
      return {
        ...state,
        error: "Please, add a valid search album name or artist",
      };
    }
    case "error": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "no-error": {
      return {
        ...state,
        error: null,
      };
    }
    case "show-results": {
      return {
        ...state,
        searchDone: true,
      };
    }
    default:
      return state;
  }
};
