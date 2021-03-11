import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/post/PostListContainer';
import FooterContainer from '../containers/common/FooterContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <FooterContainer />
    </>
  );
};

export default PostListPage;
