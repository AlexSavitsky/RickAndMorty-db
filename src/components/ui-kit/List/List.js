import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "./styles.scss";

const List = (props) => {
  const {posts} = props;
  const titles = posts ? Object.keys(posts[0]) : null;

  return (
    <>
      {posts?.map((post, key) => {
        const isImage = !!post.image;
        return (
          <Grid className="list_item" item xs={4} key={post.name + key}>
            <Link
              to={`/RickAndMorty-db/character/${post.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="item_container">
                {isImage ? (
                  <img alt="alt" src={post.image} className="item_image" />
                ) : null}
                <div className="item_info">
                  {titles?.map((title, key) => {
                    return (
                      <Typography key={title + key}>
                        {title !== "image" && title !== "id"
                          ? `${
                              title.charAt(0).toUpperCase() + title.slice(1)
                            } - ${post[title]}`
                          : ``}
                      </Typography>
                    );
                  })}
                </div>
              </div>
            </Link>
          </Grid>
        );
      })}
    </>
  );
};

export default List;
