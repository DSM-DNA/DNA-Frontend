import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import WriteContainer from '../containers/write/WriteContainer';
import FooterContainer from '../containers/common/FooterContainer';
import { RouteComponentProps } from 'react-router-dom';

const WritePage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <HeaderContainer />
      <WriteContainer />
      <FooterContainer />
    </>
  );
};

export default WritePage;
