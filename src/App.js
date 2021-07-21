import React from 'react';
//Components
import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';
import Watchlist from './pages/Watchlist';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  return (
    <div className='App' style={{ overflowX: 'hidden' }}>
      <GlobalStyles />
      <Switch>
        <Route exact path='/watchlist/movie/:id'>
          <MovieDetail pathId={pathId} />
        </Route>
        <Route path='/watchlist'>
          <Watchlist />
        </Route>
        <Route path='/movie/:id'>
          <MovieDetail pathId={pathId} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
