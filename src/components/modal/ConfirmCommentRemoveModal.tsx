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
  width: 780px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 31px;
  margin: auto;
  margin-top: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -390px;
  margin-top: -150px;
`;

const StyledTitle = styled.h1`
  color: #000000;
  font-family: 'Nanum Gothic';
  text-align: center;
  padding-top: 120px;
`;

const ConfirmCommentRemoveModal: React.FC = () => {
  return (
    <MainBlock>
      <MarginBox>
        <ModalContent>
          <StyledTitle>댓글이 삭제되었습니다.</StyledTitle>
        </ModalContent>
      </MarginBox>
    </MainBlock>
  );
};

export default ConfirmCommentRemoveModal;
