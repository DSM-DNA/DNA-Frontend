import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { useUserState, useUserDispatch } from '../../contexts/user';
import { register } from '../../lib/api/auth';

const RegisterForm: React.FC = () => {
  const state = useUserState();
  const dispatch = useUserDispatch();

  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        dispatch({ type: 'SET_NAME', name: value });
        break;
      case 'email':
        dispatch({ type: 'SET_EMAIL', email: value });
        break;
      case 'password':
        dispatch({ type: 'SET_PASSWORD', password: value });
        break;
      case 'passwordConfirm':
        dispatch({ type: 'SET_PASSWORDCONFIRM', passwordConfirm: value });
        break;
    }
  };

  const onSubmit = async () => {
    const res = await register(state.name, state.email, state.password);
    if (res) {
      if (res === 201) {
        alert('회원가입 성공');
        history.push('/login');
      } else {
        return;
      }
    }
  };

  return (
    <AuthForm
      type="register"
      state={state}
      onChange={onChange}
      onSubmit={onSubmit}
      error={false}
    />
  );
};

export default RegisterForm;
