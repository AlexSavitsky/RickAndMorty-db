import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Menu = () => {
  return (
    <div className="menu_wrapper">
      <div className="menu">
        <Link to="/RickAndMorty-db/characters" style={{ textDecoration: "none" }}>
          <button>Characters</button>
        </Link>
        <Link to="/RickAndMorty-db/episodes" style={{ textDecoration: "none" }}>
          <button>Episodes</button>
        </Link>
        <Link to="/RickAndMorty-db/locations" style={{ textDecoration: "none" }}>
          <button>Locations</button>
        </Link>
        <Link to="/RickAndMorty-db/favorites" style={{ textDecoration: "none" }}>
          <button>Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
