import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { verifyEmail } from '../../lib/api/auth';

const MainBlock = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
`;

const MarginBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(${palette.darkcyan}, 0.7);
`;

const ModalContent = styled.div`
  width: 600px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 31px;
  margin: auto;
  margin-top: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -150px;
`;

const TextBox = styled.div`
  width: 500px;
  height: 140px;
  margin: auto;
  text-align: center;
  color: #000000;
  padding-top: 10px;
  h1 {
    padding-top: 10px;
    font-family: 'Nanum Gothic';
  }
  h4 {
    font-family: 'Nanum Gothic';
    padding-top: 10px;
  }
`;

const ButtonBox = styled.div`
  width: 400px;
  height: 68px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  button {
    width: 180px;
    height: 100%;
    background: rgba(${palette.darkblue}, 1);
    color: #ffffff;
    font-size: 24px;
    font-family: 'Nanum Gothic';
  }
`;

const InputBox = styled.div`
  width: 400px;
  height: 40px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;

  input {
    width: 250px;
    height: 40px;
    font-size: 15px;
    ::placeholder {
      font-family: 'Nanum Gothic';
    }
    border-radius: 10px;
    outline: none;

    text-align: center;

    transition: background-color 0.7s;
  }
`;

const EmailVerifyModal: React.FC<{
  email: string;
  setVerified: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ email, setVerified }) => {
  const [verifyCode, setVerifyCode] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerifyCode(e.target.value);
  };
  const onClick = async () => {
    const res = await verifyEmail(email, verifyCode);
    if (res) {
      alert('인증에 성공했습니다.');
      setVerified(true);
    } else {
      alert('인증에 실패했습니다. 코드를 다시 확인해 주세요.');
    }
  };
  return (
    <MainBlock>
      <MarginBox>
        <ModalContent>
          <TextBox>
            <h1>이메일 인증</h1>
            <h4>
              작성하신 이메일로 코드가 발송되었습니다. 메일을 확인해 주세요.
            </h4>
          </TextBox>
          <InputBox>
            <input
              onChange={onChange}
              value={verifyCode}
              placeholder="인증번호"
            />
          </InputBox>
          <ButtonBox>
            <button onClick={onClick}>인증하기</button>
          </ButtonBox>
        </ModalContent>
      </MarginBox>
    </MainBlock>
  );
};

export default EmailVerifyModal;
