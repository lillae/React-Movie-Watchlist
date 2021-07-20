const intitialState = {
  favorites: [],
  favIds: [],
  btnId: [],
  isFavorite: false,
  toggle: false,
};

const watchlistReducer = (state = intitialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case 'ADD_WATCHLIST':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        favIds: [
          ...state.favorites.map((movie) => movie.id),
          action.payload.id,
        ],
        btnId: action.payload.id,
        isFavorite: true,
        toggle: true,
      };
    case 'REMOVE_WATCHLIST': {
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((movie) => movie.id !== action.payload.id),
        ],
        favIds: [...state.favorites.map((movie) => movie.id)],
        btnId: action.payload.id,
        isFavorite: false,
        toggle: false,
      };
    }

    case 'CLEAR_ALL': {
      return intitialState;
    }

    default:
      return state;
  }
};

export default watchlistReducer;
