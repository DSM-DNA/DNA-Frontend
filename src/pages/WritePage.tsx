import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import WriteContainer from '../containers/write/WriteContainer';
import Footer from '../components/common/Footer';
import { RouteComponentProps } from 'react-router-dom';

const WritePage: React.FC<RouteComponentProps> = ({ match }) => {
  const onClick: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void = () => {
    console.log('click');
  };
  return (
    <>
      <HeaderContainer
        path={match.path.slice(1, match.path.indexOf('/', 1) - 1)}
      />
      <WriteContainer />
      <FooterContainer onClick={onClick} />
    </>
  );
};

export default WritePage;
