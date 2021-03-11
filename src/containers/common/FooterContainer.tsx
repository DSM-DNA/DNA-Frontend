import React from 'react';
import Footer from '../../components/common/Footer';
import { logout } from '../../lib/api/auth';
import { useUserDispatch, useUserState } from '../../contexts/user';
import { useHistory } from 'react-router';

const FooterContainer: React.FC = () => {
  const state = useUserState();
  const dispatch = useUserDispatch();
  const history = useHistory();

  const onClick: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void = async () => {
    const res = await logout(state.token);
    if (res === 200) {
      dispatch({ type: 'SET_TOKEN', token: '' });
      dispatch({ type: 'SET_REFTOKEN', reftoken: '' });
      history.push('/login');
    } else {
      alert('로그아웃 실패');
      return;
    }
  };
  return <Footer onClick={onClick} />;
};

export default FooterContainer;
