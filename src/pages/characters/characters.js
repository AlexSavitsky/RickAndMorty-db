import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import { getPosts } from '../../store/actions/post';
import Content from '../../components/Content';
import { characterSelectors } from '../../api/mockup-data';
import { dumpCharacter } from '../../utils/dumps';
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"

const Characters = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);
  const posts = dumpCharacter(data)
  const [filters, setFilters] = useState({
    species: {
      value: '',
      type: 'selector',
    },
    status: {
      value: '',
      type: 'selector',
    },
    gender: {
      value: '',
      type: 'selector',
    },
  });
  
  useEffect(() => {
    dispatch(getPosts('character', filters));
  }, [dispatch, filters]);

  return (
    <>
      <Menu/>
      <Content
          count={data.data.info?.count}
          posts={posts}
          pagination={9}
          setFilters={setFilters}
          filters={filters}
          selectors={characterSelectors}
          isTable={false}
      />
      <Footer/>
    </>
  );
};

export default Characters;
