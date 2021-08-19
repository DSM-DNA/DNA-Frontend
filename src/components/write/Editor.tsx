import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const EditorBlock = styled.div`
  width: 100vw;
  height: calc(100vh - 70px - 108px);
  margin: 0;
  padding: 0;
  display: flex;
  background: rgba(${palette.darkcyan}, 0.7);
`;

const PostBox = styled.form`
  width: 1054px;
  height: 452px;
  margin: auto;
  margin-top: 183px;
  background: rgba(${palette.lightgreen}, 0.3);
`;

const TopBox = styled.div`
  width: 990px;
  height: 80px;
  margin: auto;
  margin-top: 20px;
`;

const SelectBox = styled.select`
  width: 100%;
  height: 35px;
  margin: auto;
  color: #000000;
  font-size: 18px;
  font-family: '나눔고딕';
  padding-left: 10px;
  border: none;
  outline: none;
  option {
    background: rgba(${palette.lightgreen}, 0.6);
  }
`;

const InputText = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 8px;
  color: #000000;
  font-size: 18px;
  font-family: 'Nanum Gothic';
  padding: 0px;
  border: none;
  outline: none;
  padding-left: 10px;
`;

const InputBox = styled.div`
  width: 990px;
  height: 200px;
  margin: auto;
  margin-top: 40px;
  background-color: #ffffff;
`;

const TextBox = styled.input`
  width: 880px;
  height: 160px;
  margin: 18px 50px;
  color: #000000;
  font-size: 24px;
  font-family: 'Nanum Gothic';
  text-align: center;
  border: none;
  outline: none;
`;

const ButtonBox = styled.div`
  width: 140px;
  height: 40px;
  margin: auto;
  margin-top: 55px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Nanum Gothic';
  background: rgba(${palette.darkblue}, 1);
  cursor: pointer;
`;

const Editor: React.FC<{
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  state: { type: string; title: string; content: string };
}> = ({ onSubmit, onChange, state }) => {
  return (
    <EditorBlock>
      <PostBox method="post" onSubmit={onSubmit}>
        <TopBox>
          <SelectBox name="type" value={state.type} onChange={onChange}>
            <option value="none">카테고리를 설정해 주세요</option>
            <option value="WORKER">ADENINE - 노동자 구하기</option>
            <option value="DIVER">GUANINE - 잠수 탄 친구 찾기</option>
            <option value="COMMON">CYTOSINE - 일반</option>
            <option value="BUYER">THYMINE - 대리 구매자 구하기</option>
          </SelectBox>
          <InputText
            name="title"
            type="text"
            onChange={onChange}
            placeholder="제목을 입력하세요"
          />
        </TopBox>
        <InputBox>
          <TextBox
            name="content"
            type="text"
            onChange={onChange}
            placeholder="내용을 입력하세요"
          />
        </InputBox>
        <ButtonBox>
          <Button type="submit">등록</Button>
        </ButtonBox>
      </PostBox>
    </EditorBlock>
  );
};

export default Editor;
