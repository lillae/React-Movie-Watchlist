const initialState = {
  isLoading: true,
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HERO':
      return {
        ...state,
        isLoading: false,
      };
    case 'LOADING_HERO':
      return {
        ...state,
        isLoading: true,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default heroReducer;
