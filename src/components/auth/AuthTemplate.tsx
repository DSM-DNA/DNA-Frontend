import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const StyledAuthTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(${palette.darkcyan}, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Gothic';
`;

const WrapperBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 46rem;
  height: 43.75rem;
`;

const AuthTemplate: React.FC = ({ children }) => {
  return (
    <StyledAuthTemplate>
      <WrapperBox>{children}</WrapperBox>
    </StyledAuthTemplate>
  );
};

export default AuthTemplate;
