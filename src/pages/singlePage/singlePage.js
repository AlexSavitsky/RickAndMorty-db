import React, { useState, useEffect} from "react";
import {
  getFromStorage,
  putInStorage,
  updateStorage,
} from "../../utils/localstorage";
import {useParams} from "react-router-dom";
import Footer from "../../components/Footer"
import Menu from "../../components/Menu";
import episodeImg from "../../recources/img/episode.jpg";
import locationImg from "../../recources/img/locationImg.webp";
import "./style.scss";

const SinglePage = (props) => {
  const {type} = props;
  const [post, setPost] = useState({});
  const [list, setList] = useState(getFromStorage("list") || []);
  const id = useParams().id;
  
  useEffect(() => {
    const fetching = async () => {
      const post = await fetch(`https://rickandmortyapi.com/api/${type}/${id}`);

      setPost(await post.json());
    };
    fetching();
  }, [type, id]);

  useEffect(() => {
    updateStorage("list", list);
  }, [list]);

  return (
    <>
      <Menu />
      <div className="single-item__container">
        <TransformedItem
          item={post}
          type={type}
          list={list}
          setList={setList}
        />
      </div>
      <Footer/>
    </>
  );
};

const TransformedItem = (props) => {
  const { item, type, list, setList } = props;
  let btnClass = "";
  list.map((listItem) => {
    if (listItem.name === item.name) {
      btnClass = "active";
    }
  });
  switch (type) {
    case "character":
      return (
        <div className="item">
          <img alt="alt" src={item.image} />
          <div>
            <ul>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Species: {item.species}</li>
              <li>Status: {item.status}</li>
              <li>Gender: {item.gender}</li>
              <li>Created: {item.created}</li>
              <button
              className={btnClass}
              disabled={btnClass === "" ? false : true}
                onClick={() =>
                  !!list
                    ? setList([
                        ...list,
                        {
                          name: item.name,
                          type: type,
                          id: item.id,
                          favorite: true,
                        },
                      ])
                    : putInStorage("list", [
                        {
                          name: item.name,
                          type: type,
                          id: item.id,
                          favorite: true,
                        },
                      ])
                }
              >
                Add to favorite
              </button>
            </ul>
          </div>
        </div>
      );
    case "episode":
      return (
        <div className="item">
          <img alt="alt" src={episodeImg} className="episodeImg" />
          <div>
            <ul>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Air Date: {item.air_date}</li>
              <li>Episode: {item.episode}</li>
              <li>Created: {item.created}</li>
              <button
              className={btnClass}
              disabled={btnClass === "" ? false : true}
                onClick={() =>
                  !!list
                    ? setList([
                        ...list,
                        {
                          name: item.name,
                          type: type,
                          id: item.id,
                          favorite: true,
                        },
                      ])
                    : putInStorage("list", [
                        {
                          name: item.name,
                          type: type,
                          id: item.id,
                          favorite: true,
                        },
                      ])
                }
              >
                Add to favorite
              </button>
            </ul>
          </div>
        </div>
      );
    case "location":
      return (
        <div className="item">
          <img alt="alt" src={locationImg} className="locationImg" />
          <div>
            <ul>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Type: {item.type}</li>
              <li>Dimension: {item.dimension}</li>
              <li>Created: {item.created}</li>
              <button
              className={btnClass}
              disabled={btnClass === "" ? false : true}
                onClick={() =>
                  !!list
                    ? setList([
                        ...list,
                        {
                          name: item.name,
                          type: type,
                          id: item.id,
                          favorite: true,
                        },
                      ])
                    : putInStorage("list", [
                        {
                          name: item.name,
                          type: type,
                          id: item.id,
                          favorite: true,
                        },
                      ])
                }
              >
                Add to favorite
              </button>
            </ul>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default SinglePage;
