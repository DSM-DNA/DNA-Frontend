import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Redirect, useHistory } from 'react-router-dom';

const HeaderBox = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  background: rgba(${palette.darkcyan}, 0.7);
`;

const Space = styled.div`
  width: 31px;
`;

const SvgA: React.FC<{
  fill: string;
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}> = ({ fill, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 442 60.62"
      onClick={onClick}
      name="A"
      style={{ cursor: 'pointer' }}
    >
      <g data-name="레이어 2">
        <g data-name="레이어 1">
          <rect y="0.31" width="394.33" height="60" fill={fill} />
          <path d="M442,30.31,393.49,60.62V0Z" fill={fill} />
          <text
            x="238px"
            y="40px"
            fill="black"
            style={{
              fontFamily: 'Nanum Gothic',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '30px',
              lineHeight: '30px',
            }}
          >
            ADENINE
          </text>
        </g>
      </g>
    </svg>
  );
};

const SvgT: React.FC<{
  fill: string;
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}> = ({ fill, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 442 60.62"
      onClick={onClick}
      name="T"
      style={{ cursor: 'pointer' }}
    >
      <g data-name="레이어 2">
        <g data-name="레이어 1">
          <rect x="47.67" y="0.31" width="394.33" height="60" fill={fill} />
          <path d="M0,30.31,48.51,0V60.62Z" fill={fill} />
          <text
            x="70px"
            y="40px"
            fill="black"
            style={{
              fontFamily: 'Nanum Gothic',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '30px',
              lineHeight: '30px',
            }}
          >
            THYMINE
          </text>
        </g>
      </g>
    </svg>
  );
};

const SvgCircle: React.FC<{
  fill: string;
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}> = ({ fill, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 65 65"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <g data-name="레이어 2">
        <g data-name="레이어 1">
          <circle cx="32.5" cy="32.5" r="32.5" fill={fill} />
        </g>
      </g>
      <image href="/plus.png" width="60px" height="60px" x="2.5px" y="2.5px" />
    </svg>
  );
};

const SvgG: React.FC<{
  fill: string;
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}> = ({ fill, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 425.6 60"
      onClick={onClick}
      name="G"
      style={{ cursor: 'pointer' }}
    >
      <g data-name="레이어 2">
        <g data-name="레이어 1">
          <rect x="42.16" width="383.44" height="60" fill={fill} />
          <path d="M42.66,30,0,0H85.32Z" fill={fill} />
          <path d="M42.66,30,85.32,60H0Z" fill={fill} />
          <text
            x="70px"
            y="40px"
            fill="black"
            style={{
              fontFamily: 'Nanum Gothic',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '30px',
              lineHeight: '30px',
            }}
          >
            GUANINE
          </text>
        </g>
      </g>
    </svg>
  );
};

const SvgC: React.FC<{
  fill: string;
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}> = ({ fill, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 425.6 60"
      onClick={onClick}
      name="C"
      style={{ cursor: 'pointer' }}
    >
      <g data-name="레이어 2">
        <g data-name="레이어 1">
          <rect width="383.44" height="60" fill={fill} />
          <path d="M382.94,30,425.6,60H340.28Z" fill={fill} />
          <path d="M382.94,30,340.28,0H425.6Z" fill={fill} />
          <text
            x="238px"
            y="40px"
            fill="black"
            style={{
              fontFamily: 'Nanum Gothic',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '30px',
              lineHeight: '30px',
            }}
          >
            CITOSINE
          </text>
        </g>
      </g>
    </svg>
  );
};

const Header: React.FC<{ path: string }> = ({ path }) => {
  const history = useHistory();

  return (
    <HeaderBox>
      <SvgA
        fill={path === 'adenine' ? '#931A25' : '#ffffff'}
        onClick={() => {
          history.push('/adenine');
        }}
      />
      <SvgG
        fill={path === 'guanine' ? '#931A25' : '#ffffff'}
        onClick={() => {
          history.push('/guanine');
        }}
      />
      <Space />
      <SvgCircle
        fill={`rgba(${palette.cyan}, 1)`}
        onClick={() => {
          history.push('/write');
        }}
      />
      <Space />
      <SvgC
        fill={path === 'citosine' ? '#931A25' : '#ffffff'}
        onClick={() => {
          history.push('/citosine');
        }}
      />
      <SvgT
        fill={path === 'thymine' ? '#931A25' : '#ffffff'}
        onClick={() => {
          history.push('/thymine');
        }}
      />
    </HeaderBox>
  );
};

export default Header;
