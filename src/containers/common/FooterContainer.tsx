import React, { useState } from 'react';
import Footer from '../../components/common/Footer';
//import { logout } from '../../lib/api/auth';
import { useUserDispatch, useUserState } from '../../contexts/user';
import { useHistory } from 'react-router';
import AskLogoutModal from '../../components/modal/AskLogoutModal';
import ConfirmLogoutModal from '../../components/modal/ConfirmLogoutModal';

const FooterContainer: React.FC = () => {
  const state = useUserState();
  const dispatch = useUserDispatch();
  const history = useHistory();

  const [showAsk, setShowAsk] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onClickLogout: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void = async () => {
    setShowAsk(true);
  };

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    switch (e.currentTarget.name) {
      case 'submit':
        logout();
        break;
      case 'cancel':
        setShowAsk(false);
        break;
    }
  };

  const logout = () => {
    setShowAsk(false);
    setShowConfirm(true);
    setTimeout(() => {
      setShowConfirm(false);
      dispatch({ type: 'SET_TOKEN', token: '' });
      dispatch({ type: 'SET_REFTOKEN', reftoken: '' });
      history.push('/login');
    }, 2000);
  };
  return (
    <>
      <Footer onClick={onClickLogout} />
      {showAsk && <AskLogoutModal onClick={onClick} />}
      {showConfirm && <ConfirmLogoutModal />}
    </>
  );
};

export default FooterContainer;
