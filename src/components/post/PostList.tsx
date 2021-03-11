import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ListBlock = styled.div`
  width: 100vw;
  height: calc(100vh - 70px - 108px);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: rgba(${palette.darkcyan}, 0.7);
`;

const ListBox = styled.div`
  margin-top: 34px;
`;

const PostList: React.FC = ({ children }) => {
  return (
    <ListBlock>
      <ListBox>{children}</ListBox>
    </ListBlock>
  );
};

export default PostList;
