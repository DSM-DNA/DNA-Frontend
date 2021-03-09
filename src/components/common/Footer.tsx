import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const FooterBox = styled.div`
  width: 100vw;
  height: 108px;
  display: flex;
  background: rgba(${palette.darkcyan}, 0.7);
`;

const Logout: React.FC<{
  onClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}> = ({ onClick }) => {
  return (
    <img
      src="logout.png"
      alt=""
      onClick={onClick}
      width="80px"
      height="80px"
      style={{
        position: 'absolute',
        cursor: 'pointer',
        bottom: '22px',
        right: '23px',
      }}
    />
  );
};

const Footer: React.FC<{
  onClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}> = ({ onClick }) => {
  return (
    <FooterBox>
      <Logout onClick={onClick} />
    </FooterBox>
  );
};

export default Footer;
