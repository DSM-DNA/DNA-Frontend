import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { useUserState } from '../contexts/user';
import WritePage from '../pages/WritePage';
import PostListPage from '../pages/PostListPage';

export const MainRouter: React.FC = () => {
  const state = useUserState();
  return (
    <Switch>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      {state.token.length && (
        <>
          <Route component={PostListPage} path="/adenine" />
          <Route component={PostListPage} path="/guanine" />
          <Route component={PostListPage} path="/citosine" />
          <Route component={PostListPage} path="/thymine" />
          <Route component={WritePage} path="/write" />
        </>
      )}
      {!state.token.length && (
        <Route path="*" render={() => <Redirect to="/login" />} />
      )}
      <Route path="*" render={() => <text>404 Not Fount</text>} />
    </Switch>
  );
};
