import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { State } from '../../contexts/user';
import { emailCheck } from '../../lib/api/auth';

const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    color: rgba(${palette.darkblue}, 1);
    font-family: 'Nanum Gothic';
    font-size: 45px;
    font-weight: 800;
    line-height: 45px;
    text-decoration-line: underline;
  }
  text-align: center;
`;

const StyledInput = styled.input<{ authType: string; error: boolean }>`
  width: 45.31rem;
  height: 4.875rem;
  font-size: 1.563rem;
  ::placeholder {
    font-family: 'Nanum Gothic';
  }
  border-radius: 25px;
  outline: none;

  transition: background-color 0.7s;

  padding-left: 3.4rem;
  ${(props) =>
    props.authType === 'login'
      ? css`
          margin-top: 143px;
          & + & {
            margin-top: 45px;
          }
        `
      : css`
          margin-top: 71px;
          & + & {
            margin-top: 41px;
          }
        `}
  ${(props) =>
    props.error
      ? css`
          background-color: #ffcb8e;
        `
      : css`
          background-color: #f5efef;
        `}
`;

const CheckButton = styled.button`
  width: 159px;
  height: 65px;
  position: absolute;
  background: rgba(32, 64, 81, 0.8);
  margin-top: 242px;
  margin-left: 540px;
  border-radius: 10px;

  font-size: 25px;
  line-height: 25px;
  font-weight: bold;
  font-style: normal;
  font-family: 'Nanum Gothic';
  color: white;
`;

const ErrorMsg = styled.p<{ type: string }>`
  position: absolute;
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  font-size: 20px;
  line-height: 20px;
  margin-left: 55px;

  ${(props) =>
    props.type === 'name'
      ? css`
          margin-top: 205px;
        `
      : props.type === 'email'
      ? css`
          margin-top: 323px;
        `
      : props.type === 'pw'
      ? css`
          margin-top: 562px;
        `
      : props.type === 'login'
      ? css`
          margin-top: 134px;
        `
      : css``}
`;

const Footer = styled.div`
  margin-top: 2.813rem;
  font-size: 1.563rem;
  a {
    color: rgba(${palette.darkblue}, 1);
    text-decoration-line: underline;
  }
`;

const authMapEn: { [index: string]: string } = {
  login: 'LOGIN',
  register: 'SIGN UP',
};

const authMapKo: { [index: string]: string } = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm: React.FC<{
  type: string;
  state: State;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: boolean;
}> = ({ type, state, onChange, onSubmit, error }) => {
  const authTextEn = authMapEn[type];
  const authTextKo = authMapKo[type];

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  useEffect(() => {
    if (state.password !== state.passwordConfirm && type === 'register') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [state.password, state.passwordConfirm]);

  useEffect(() => {
    if (!state.name && type === 'register') {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [state.name]);

  const check = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        state.email,
      )
    ) {
      setEmailError(true);
      setEmailChecked(false);
      return;
    }
    const res = await emailCheck(state.email);
    if (res) {
      setEmailError(false);
      setEmailChecked(true);
      return;
    } else {
      setEmailError(true);
      setEmailChecked(false);
    }
  };

  return (
    <StyledAuthForm>
      <span>{authTextEn}</span>
      {type === 'register' && (
        <CheckButton onClick={check}>중복 확인</CheckButton>
      )}
      {type === 'login' && error && (
        <ErrorMsg type="login">이메일 또는 비밀번호가 잘못되었습니다</ErrorMsg>
      )}
      {nameError && <ErrorMsg type="name">이름을 입력하세요</ErrorMsg>}
      {emailError && (
        <ErrorMsg type="email">이메일 형식이 올바른지 확인해 주세요</ErrorMsg>
      )}
      {passwordError && (
        <ErrorMsg type="pw">비밀번호가 일치하지 않습니다</ErrorMsg>
      )}

      <form onSubmit={onSubmit}>
        {type === 'register' && (
          <StyledInput
            autoComplete="on"
            type="text"
            name="name"
            placeholder="이름을 입력해 주세요"
            authType="register"
            onChange={onChange}
            value={state.name}
            error={nameError}
          />
        )}
        <StyledInput
          autoComplete="email"
          type="email"
          name="email"
          placeholder="이메일을 입력해 주세요"
          autoFocus
          authType={type}
          onChange={onChange}
          value={state.email}
          error={emailError || error}
        />
        <StyledInput
          autoComplete="on"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          authType={type}
          onChange={onChange}
          value={state.password}
          error={error}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="on"
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호를 확인해 주세요"
            authType="register"
            onChange={onChange}
            value={state.passwordConfirm}
            error={passwordError}
          />
        )}
        <Button
          disabled={
            nameError ||
            emailError ||
            passwordError ||
            (!emailChecked && type === 'register')
          }
          authType={type}
          type="submit"
        >
          {authTextKo}
        </Button>
      </form>
      {type === 'login' && (
        <Footer>
          <Link to="/register">아직 계정이 없으신가요?</Link>
        </Footer>
      )}
    </StyledAuthForm>
  );
};

export default AuthForm;
