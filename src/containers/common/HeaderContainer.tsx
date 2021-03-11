import React from 'react';
import Header from '../../components/common/Header';
import { useLocation } from 'react-router-dom';

const HeaderContainer: React.FC = () => {
  const location = useLocation();
  return <Header path={location.pathname} />;
};

export default HeaderContainer;
