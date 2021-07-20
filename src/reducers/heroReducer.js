const initialState = {
  isLoading: true,
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
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
