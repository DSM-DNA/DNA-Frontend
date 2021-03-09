import React from 'react';
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

const AskMarginBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(${palette.darkcyan}, 0.7);
`;

const AskModalContent = styled.div`
  width: 880px;
  height: 310px;
  border-radius: 30px;
  background-color: #ffffff;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -440px;
  margin-top: -155px;
  z-index: 1;
`;

const TextBox = styled.div`
  width: 750px;
  height: 140px;
  margin: auto;
  text-align: center;
  color: #000000;
  padding-top: 20px;
  h1 {
    padding-top: 25px;
    font-family: 'Nanum Gothic';
  }
  h4 {
    font-family: 'Nanum Gothic';
    padding-top: 25px;
  }
`;

const ButtonBox = styled.div`
  width: 400px;
  height: 68px;
  margin: auto;
  margin-top: 54px;
  button {
    width: 180px;
    height: 100%;
    background: rgba(${palette.darkblue}, 1);
    color: #ffffff;
    font-size: 24px;
    font-family: 'Nanum Gothic';
    margin: 0 5px;
  }
`;

export const AskPostModal: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => {
  return (
    <MainBlock>
      <AskMarginBox>
        <AskModalContent>
          <TextBox>
            <h1>게시물을 등록하시겠습니까?</h1>
            <h4>게시물을 등록한 후에는 수정하실 수 없습니다.</h4>
          </TextBox>
          <ButtonBox>
            <button onClick={onClick} name="submit">
              등록
            </button>
            <button onClick={onClick} name="cancel">
              취소
            </button>
          </ButtonBox>
        </AskModalContent>
      </AskMarginBox>
    </MainBlock>
  );
};

const ConfirmMarginBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(${palette.darkcyan}, 0.7);
  z-index: -1;
`;

const ConfirmModalContent = styled.div`
  width: 780px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 31px;
  margin: auto;
  margin-top: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -440px;
  margin-top: -155px;
`;

const StyledTitle = styled.h1`
  color: #000000;
  font-family: 'Nanum Gothic';
  text-align: center;
  padding-top: 120px;
`;

export const ConfirmPostModal: React.FC = () => {
  return (
    <MainBlock>
      <ConfirmMarginBox>
        <ConfirmModalContent>
          <StyledTitle>게시물이 등록되었습니다.</StyledTitle>
        </ConfirmModalContent>
      </ConfirmMarginBox>
    </MainBlock>
  );
};
