import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainPage from '../pages/MainPage';
import { useUserState } from '../contexts/user';
import WritePage from '../pages/WritePage';

export const MainRouter: React.FC = () => {
  const state = useUserState();
  return (
    <Switch>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      {/* <Route component={WritePage} path="/write" /> */}
      {state.token.length > 0 && <Route component={MainPage} path="/main" />}
      <Route path="*" render={() => <Redirect to="/login" />} />
    </Switch>
  );
};
