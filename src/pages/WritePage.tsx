import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import WriteContainer from '../containers/write/WriteContainer';
import FooterContainer from '../containers/common/FooterContainer';
import { RouteComponentProps } from 'react-router-dom';

const WritePage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <HeaderContainer
        path={match.path.slice(1, match.path.indexOf('/', 1) - 1)}
      />
      <WriteContainer />
      <FooterContainer />
    </>
  );
};

export default WritePage;
