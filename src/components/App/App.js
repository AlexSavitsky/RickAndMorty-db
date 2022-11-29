import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from '../../pages/main'
import Characters from '../../pages/characters';
import Episodes from '../../pages/episodes';
import Locations from '../../pages/locations';
import Favorites from '../../pages/favorites';
import SinglePage from '../../pages/singlePage';
import './styles.scss';

const App = (props) => {
  return (
    <Router>
      <Route path='/RickAndMorty-db' component={Main} exact />
      <Route path='/RickAndMorty-db/characters' component={Characters} exact />
      <Route path='/RickAndMorty-db/episodes' component={Episodes} exact />
      <Route path='/RickAndMorty-db/locations' component={Locations} exact/>
      <Route path='/RickAndMorty-db/favorites' component={Favorites} exact/>
      <Route path='/RickAndMorty-db/character/:id' component={SinglePage} exact />
      <Route path='/RickAndMorty-db/episode/:id' component={SinglePage} exact />
      <Route path='/RickAndMorty-db/location/:id' component={SinglePage} exact />
    </Router>
  );
};

export default App;
