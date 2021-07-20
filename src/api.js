//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//BASE URL's
const base_url_tmdb = `https://api.themoviedb.org/3/`;

//MOVIES
const trending = `trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_TMDB}&language=en-US&page=1&include_adult=false`;
const upcoming = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_TMDB}&primary_release_date.gte=${currentDate}&primary_release_date.lte=${nextYear}&sort_by=release_date.asc&include_adult=false`;

//SEARCH
const search = `search/multi?api_key=${process.env.REACT_APP_MOVIE_TMDB}&language=en-US&page=1&include_adult=false&query=`;

//Genre:
const scifi = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_TMDB}&primary_release_date.gte=${lastYear}&primary_release_date.lte=${currentDate}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=878`;
const thriller = `discover/movie?api_key=${process.env.REACT_APP_MOVIE_TMDB}&primary_release_date.gte=${lastYear}&primary_release_date.lte=${currentDate}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=53,9648`;

//Poster
export const imgPath = `https://image.tmdb.org/t/p/w500/`;
export const bgPath = `https://image.tmdb.org/t/p/original/`;

//Detail
const details = `?api_key=${process.env.REACT_APP_MOVIE_TMDB}&language=en-US`;

//URL's
export const trendingURL = () => `${base_url_tmdb}${trending}`;
export const upcomingURL = () => `${base_url_tmdb}${upcoming}`;
export const scifiURL = () => `${base_url_tmdb}${scifi}`;
export const thrillerURL = () => `${base_url_tmdb}${thriller}`;
export const detailsURL = (movie_id) =>
  `${base_url_tmdb}movie/${movie_id}${details}`;
export const searchURL = (movie_title) =>
  `${base_url_tmdb}${search}${movie_title}`;
