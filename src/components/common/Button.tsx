import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button<{ authType: string }>`
  width: 45.31rem;
  height: 4.438rem;
  border: none;
  border-radius: 20px;
  font-size: 1.563rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #f5efef;
  outline: none;
  cursor: pointer;
  ${(props) =>
    props.authType === 'login'
      ? css`
          margin-top: 58px;
        `
      : css`
          margin-top: 44px;
        `}
  background: rgba(${palette.darkblue}, 0.3);
`;

export default StyledButton;
