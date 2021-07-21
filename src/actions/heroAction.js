// export const loadHero = () => async (dispatch) => {
//   dispatch({
//     type: 'LOADING_HERO',
//   });
// };

export const loadHero = () => {
  return {
    type: 'LOADING_HERO',
  };
};

export const getHero = () => {
  return {
    type: 'GET_HERO',
  };
};
