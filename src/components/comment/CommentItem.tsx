import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const InnerContent = styled.div`
  width: 893px;
  height: auto;
  margin: auto;
  background-color: #f4fcff;
  & + & {
    margin-top: 20px;
  }
`;

const TitleBox = styled.div`
  width: 883px;
  height: 40px;
  display: flex;
`;

const ContentBox = styled.div`
  width: 883px;
  height: auto;
  display: flex;
  margin: auto;
  margin-top: 10px;
`;

const Author = styled.text`
  font-family: 'Nanum Gothic';
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;

  min-width: 700px;
  margin-top: 25px;
  margin-left: 35px;

  flex: 1;
`;

const Content = styled.p`
  font-family: 'Nanum Gothic';
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  margin-left: 35px;
`;

const Delete: React.FC<{
  onClick: React.MouseEventHandler<HTMLImageElement>;
}> = ({ onClick }) => {
  return (
    <img
      src="trashcan.png"
      alt=""
      onClick={onClick}
      width="70px"
      height="70px"
      style={{
        objectFit: 'contain',
        cursor: 'pointer',
        flex: 1,
        right: '90px',
      }}
    />
  );
};

const CommentItem: React.FC<{
  author: string;
  content: string;
  isMine: boolean;
  onClick: React.MouseEventHandler<HTMLImageElement>;
}> = ({ author, content, isMine, onClick }) => {
  return (
    <InnerContent>
      <TitleBox>
        <Author>{author}</Author>
        {isMine && <Delete onClick={onClick} />}
      </TitleBox>
      <ContentBox>
        <Content>{content}</Content>
      </ContentBox>
    </InnerContent>
  );
};

export default CommentItem;
