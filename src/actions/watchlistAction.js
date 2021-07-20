export const addWatchlist = (movie) => {
  return {
    type: 'ADD_WATCHLIST',
    payload: movie,
  };
};

export const removeWatchlist = (movie) => {
  return {
    type: 'REMOVE_WATCHLIST',
    payload: movie,
  };
};

export const clearAll = (movie) => {
  return {
    type: 'CLEAR_ALL',
    payload: movie,
  };
};
