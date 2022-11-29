import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../../pages/main";
import Characters from "../../pages/characters";
import Episodes from "../../pages/episodes";
import Locations from "../../pages/locations";
import Favorites from "../../pages/favorites";
import SinglePage from "../../pages/singlePage";
import "./styles.scss";

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/RickAndMorty-db" element={<Main />} />
        <Route path="/RickAndMorty-db/characters" element={<Characters />} />
        <Route path="/RickAndMorty-db/episodes" element={<Episodes />} />
        <Route path="/RickAndMorty-db/locations" element={<Locations />} />
        <Route path="/RickAndMorty-db/favorites" element={<Favorites />} />
        <Route
          path="/RickAndMorty-db/character/:id"
          element={<SinglePage type="character" />}
        />
        <Route
          path="/RickAndMorty-db/episode/:id"
          element={<SinglePage type="episode" />}
        />
        <Route
          path="/RickAndMorty-db/location/:id"
          element={<SinglePage type="location" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
