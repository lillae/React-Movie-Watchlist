import axios from 'axios';
import {
  trendingURL,
  upcomingURL,
  scifiURL,
  thrillerURL,
  searchURL,
} from '../api';

export const loadMovies = () => async (dispatch) => {
  //FETCH DATA
  const trendingData = await axios.get(trendingURL());
  const upcomingData = await axios.get(upcomingURL());
  const scifiData = await axios.get(scifiURL());
  const thrillerData = await axios.get(thrillerURL());

  dispatch({
    type: 'FETCH_MOVIES',
    payload: {
      trending: trendingData.data.results,
      upcoming: upcomingData.data.results,
      scifi: scifiData.data.results,
      thriller: thrillerData.data.results,
    },
  });
};

export const fetchSearch = (movie_title) => async (dispatch) => {
  const searchMovies = await axios.get(searchURL(movie_title));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchMovies.data.results,
    },
  });
};
