import React from 'react';
import Header from '../../components/common/Header';

const HeaderContainer: React.FC<{ path: string }> = ({ path }) => {
  return <Header path={path} />;
};

export default HeaderContainer;
