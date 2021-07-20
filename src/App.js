import React from 'react';
//Components
import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' style={{ overflowX: 'hidden' }}>
      <GlobalStyles />
      <Switch>
        <Route exact path={['/movie/:id', '/']}>
          <Home />
        </Route>
        <Route exact path={['/watchlist/:id', '/watchlist']}>
          <Watchlist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
