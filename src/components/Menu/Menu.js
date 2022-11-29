import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Menu = () => {
  return (
    <div className="menu_wrapper">
      <div className="menu">
        <Link to="/characters" style={{ textDecoration: "none" }}>
          <button>Characters</button>
        </Link>
        <Link to="/episodes" style={{ textDecoration: "none" }}>
          <button>Episodes</button>
        </Link>
        <Link to="/locations" style={{ textDecoration: "none" }}>
          <button>Locations</button>
        </Link>
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <button>Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
