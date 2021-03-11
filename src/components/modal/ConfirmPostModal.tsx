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
