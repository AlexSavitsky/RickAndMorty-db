import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from '../../pages/main'
import Characters from '../../pages/characters';
import Episodes from '../../pages/episodes';
import Locations from '../../pages/locations';
import Favorites from '../../pages/favorites';
import SinglePage from '../../pages/singlePage';
import Footer from '../../components/Footer';
import './styles.scss';

const App = (props) => {
  return (
    <Router>
      <Route path='/' component={Main} exact />
      <Route path='/characters' component={Characters} exact />
      <Route path='/episodes' component={Episodes} exact />
      <Route path='/locations' component={Locations} exact/>
      <Route path='/favorites' component={Favorites} exact/>
      <Route path='/character/:id' component={SinglePage} exact />
      <Route path='/episode/:id' component={SinglePage} exact />
      <Route path='/location/:id' component={SinglePage} exact />
    </Router>
  );
};

export default App;
