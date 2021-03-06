import React, { useState } from 'react';
import Editor from '../../components/write/Editor';
import { useUserState } from '../../contexts/user';
import { useHistory } from 'react-router-dom';
import AskPostUpModal from '../../components/modal/AskPostUpModal';
import ConfirmPostUpModal from '../../components/modal/ConfirmPostUpModal';
import { writePost } from '../../lib/api/post';

const WriteContainer: React.FC = () => {
  const state = useUserState();

  const history = useHistory();

  const [type, setType] = useState('none');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showAsk, setShowAsk] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (type === 'none') {
      alert('카테고리를 설정해 주세요.');
      return;
    }
    if (!title.length) {
      alert('제목을 입력해 주세요.');
      return;
    }
    if (!content.length) {
      alert('내용을 입력해 주세요.');
      return;
    }
    if (content.length > 100) {
      alert('내용은 100글자를 초과할 수 없습니다.');
      return;
    }
    setShowAsk(true);
  };

  const onChange: React.ChangeEventHandler<
    HTMLSelectElement | HTMLInputElement
  > = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'type':
        setType(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'content':
        setContent(value);
        break;
    }
  };

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    switch (e.currentTarget.name) {
      case 'submit':
        submitPost();
        break;
      case 'cancel':
        setShowAsk(false);
        break;
    }
  };

  const submitPost = async () => {
    const res = await writePost(state.token, { title, content, type });
    if (res) {
      setShowAsk(false);
      setShowConfirm(true);
      setTimeout(() => {
        setShowConfirm(false);
        history.push('/adenine');
      }, 1000);
    }
  };

  return (
    <>
      <Editor
        onSubmit={onSubmit}
        onChange={onChange}
        state={{ type, title, content }}
      />
      {showAsk && <AskPostUpModal onClick={onClick} />}
      {showConfirm && <ConfirmPostUpModal />}
    </>
  );
};

export default WriteContainer;
