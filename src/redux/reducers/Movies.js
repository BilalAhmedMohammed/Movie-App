const INITIAL_STATE = {
  moviesList: [],
};
export default function Movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES_LIST_Page":
      return {
        ...state,
        moviesList: action.payload,
      };
    case "GET_MOVIES_LIST_Query":
      return {
        ...state,
        moviesList: action.payload,
      };
    case "GET_MOVIES_LIST_LANG":
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
}
