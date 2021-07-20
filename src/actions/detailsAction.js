import axios from 'axios';
import { detailsURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });
  const detailData = await axios.get(detailsURL(id));
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      movie: detailData.data,
    },
  });
};
