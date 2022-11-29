import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { getFromStorage, updateStorage } from "../../utils/localstorage";
import { Link } from "react-router-dom";
import "./styles.scss";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Favorites = (props) => {
  const [list, setList] = useState(getFromStorage("list") || []);

  useEffect(() => {
    updateStorage("list", list);
  }, [list]);

  const deleteItem = (key) => {
    setList(list.filter((item, index) => index !== key));
  };

  return (
    <>
      <Menu />
      <div className="favorite_container">
        <ul className="favorite_items_container">
          {list?.map((item, key) => {
            return (
              <li key={item.name + key}>
                <Link
                  to={`/${item.type}/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography>{`${item.name} - ${item.type}`}</Typography>
                </Link>
                <div className="item_button_container">
                  <Button
                    className="item_button"
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteItem(key)}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
