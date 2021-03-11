import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  margin: auto;
  margin-top: 12px;
  width: 1584px;
  height: 107px;
  background: #ffffff;
  cursor: pointer;
`;

const InnerBox = styled.div`
  width: 1477px;
  height: 35px;
  margin: auto;
  margin-top: 17px;
  display: flex;
  & + & {
    margin-top: 30px;
  }
`;

const Title = styled.text`
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 28px;

  min-width: 880px;

  margin-top: 15px;
  flex: 1;

  color: #000000;
`;

const Author = styled.text`
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;

  margin-top: 17px;
  flex: 1;
  color: #000000;
`;

const Date = styled.text`
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;

  margin-top: 17px;
  flex: 1;
  color: #000000;
`;

const Content = styled.text`
  font-family: NanumGothic;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;

  color: #000000;
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
        position: 'absolute',
        cursor: 'pointer',
        flex: 1,
        right: '90px',
      }}
    />
  );
};

const PostItem: React.FC<{
  title: string;
  content: string;
  author: string;
  isMine: boolean;
  createdAt: string;
}> = ({ title, content, author, isMine, createdAt }) => {
  return (
    <ItemBox>
      <InnerBox>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Date>{createdAt}</Date>
        {isMine && <Delete onClick={() => {}} />}
      </InnerBox>
      <InnerBox>
        <Content>{content}</Content>
      </InnerBox>
    </ItemBox>
  );
};

export default PostItem;
