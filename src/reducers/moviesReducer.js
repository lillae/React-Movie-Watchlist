const initState = {
  trending: [],
  upcoming: [],
  scifi: [],
  thriller: [],
  searched: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        trending: action.payload.trending,
        upcoming: action.payload.upcoming,
        scifi: action.payload.scifi,
        thriller: action.payload.thriller,
      };
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviesReducer;
