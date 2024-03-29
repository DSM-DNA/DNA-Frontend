import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { useUserState, useUserDispatch } from '../../contexts/user';
import { login } from '../../lib/api/auth';
const LoginForm: React.FC = () => {
  const state = useUserState();
  const dispatch = useUserDispatch();

  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        dispatch({ type: 'SET_EMAIL', email: value });
        break;
      case 'password':
        dispatch({ type: 'SET_PASSWORD', password: value });
        break;
    }
  };

  const [error, setError] = useState(false);

  const onSubmit = async () => {
    const res = await login(state.email, state.password);
    if (res) {
      dispatch({ type: 'SET_TOKEN', token: res.body['access-token'] });
      dispatch({ type: 'SET_REFTOKEN', reftoken: res.body['refresh-token'] });
      setError(false);
      history.push('/write');
    } else {
      setError(true);
      return;
    }
  };

  return (
    <AuthForm
      type="login"
      state={state}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
