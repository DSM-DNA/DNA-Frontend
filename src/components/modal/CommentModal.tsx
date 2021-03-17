import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const MainBlock = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
`;

const MarginBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(${palette.darkcyan}, 0.7);
`;

const ModalContent = styled.div`
  width: 1000px;
  height: 860px;
  border-radius: 30px;
  background-color: rgba(${palette.darkblue}, 1);
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -500px;
  margin-top: -430px;
  z-index: 1;
`;

const TitleBox = styled.div`
  height: 80px;
  margin: auto;
  text-align: center;
  color: white;
  h1 {
    padding-top: 21px;
    font-family: 'Nanum Gothic';
  }
`;

const InnerBox = styled.div`
  height: 600px;
  margin: auto;
  overflow-y: auto;
`;

const StyledForm = styled.form`
  width: 893px;
  height: 100px;
  border-radius: 10px;

  margin: auto;
  margin-top: 25px;
  bottom: 10px;
`;

const CommentInput = styled.input`
  width: 750px;
  height: 100%;
  margin: auto;
  vertical-align: top;
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: #ffffff;
  font-family: 'Nanum Gothic';
  color: #000000;
  font-size: 20px;
`;

const CommentUp = styled.button`
  width: 120px;
  height: 100%;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: rgba(${palette.darkcyan}, 1);
  font-size: 20px;
  font-family: 'Nanum Gothic';
  color: #ffffff;
`;

const CommentModal: React.FC<{
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onSubmit: (comment: string) => void;
}> = ({ onClose, onSubmit, children }) => {
  const [comment, setComment] = useState('');

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(comment);
  };
  return (
    <MainBlock>
      <MarginBox onClick={onClose}>
        <ModalContent>
          <TitleBox>
            <h1>댓글</h1>
          </TitleBox>
          <InnerBox>{children}</InnerBox>
          <StyledForm onSubmit={submit}>
            <CommentInput
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="내용을 입력하세요"
            />
            <CommentUp>댓글 쓰기</CommentUp>
          </StyledForm>
        </ModalContent>
      </MarginBox>
    </MainBlock>
  );
};

export default CommentModal;
