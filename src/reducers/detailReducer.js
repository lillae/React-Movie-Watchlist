const initialState = {
  movie: { genres: [{}] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        movie: action.payload.movie,
        isLoading: false,
      };
    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
