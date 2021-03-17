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

const MarginBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(${palette.darkcyan}, 0.7);
`;

const ModalContent = styled.div`
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

const AskLogoutModal: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => {
  return (
    <MainBlock>
      <MarginBox>
        <ModalContent>
          <TextBox>
            <h1>로그아웃 하시겠습니까?</h1>
            <h4>로그아웃을 하면 로그인 페이지로 돌아가게 됩니다.</h4>
          </TextBox>
          <ButtonBox>
            <button onClick={onClick} name="submit">
              로그아웃
            </button>
            <button onClick={onClick} name="cancel">
              취소
            </button>
          </ButtonBox>
        </ModalContent>
      </MarginBox>
    </MainBlock>
  );
};

export default AskLogoutModal;
