import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import detailReducer from './detailReducer';
import heroReducer from './heroReducer';
import watchlistReducer from './watchlistReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['watchlist'],
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  detail: detailReducer,
  hero: heroReducer,
  favorites: watchlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
