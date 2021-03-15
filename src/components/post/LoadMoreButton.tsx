import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: relative;
  width: 100%;
  align-items: center;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 40px;

  font-family: 'Nanum Gothic';
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
  color: #ffffff;

  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);

  cursor: pointer;
`;

const LoadMoreButton: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => {
  return (
    <Nav>
      <Button onClick={onClick}>더보기</Button>
    </Nav>
  );
};

export default LoadMoreButton;
