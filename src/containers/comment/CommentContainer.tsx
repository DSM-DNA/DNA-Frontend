import React, { useEffect, useState } from 'react';
import CommentModal from '../../components/modal/CommentModal';
import CommentItem from '../../components/comment/CommentItem';
import AskCommentRemoveModal from '../../components/modal/AskCommentRemoveModal';
import ConfirmCommentRemoveModal from '../../components/modal/ConfirmCommentRemoveModal';
import {
  getComments,
  removeComment,
  writeComment,
} from '../../lib/api/comment';
import { useUserState } from '../../contexts/user';

interface IComment {
  commentId: number;
  content: string;
  name: string;
  isMine: boolean;
}

const CommentContainer: React.FC<{
  onClose: React.MouseEventHandler<HTMLDivElement>;
  timelineId: number;
}> = ({ onClose, timelineId }) => {
  const state = useUserState();
  const [comments, setComments] = useState<IComment[]>();
  const [commentId, setCommentId] = useState(0);
  const [showAsk, setShowAsk] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const getComment = async () => {
    const res = await getComments(state.token, timelineId);
    if (res) {
      setComments(res.data.commentResponses);
    } else {
      alert('댓글 불러오기 실패');
    }
  };

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    switch (e.currentTarget.name) {
      case 'submit':
        rmComment();
        break;
      case 'cancel':
        setShowAsk(false);
        break;
    }
  };

  const rmComment = async () => {
    const res = await removeComment(state.token, commentId);
    if (res) {
      setShowAsk(false);
      setShowConfirm(true);
      setTimeout(() => {
        setShowConfirm(false);
        setComments(
          comments?.filter((comment) => comment.commentId !== commentId),
        );
      }, 1000);
    }
  };

  const onSubmit: (comment: string) => void = async (comment) => {
    const res = await writeComment(state.token, timelineId, comment);
    if (res) {
      setTimeout(() => {
        getComment();
      }, 500);
    } else {
      alert('댓글 쓰기 실패');
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <CommentModal onSubmit={onSubmit} onClose={onClose}>
        {comments?.map((comment) => (
          <CommentItem
            key={comment.commentId}
            author={comment.name}
            content={comment.content}
            isMine={comment.isMine}
            onClick={() => {
              setCommentId(comment.commentId as number);
              setShowAsk(true);
            }}
          />
        ))}
      </CommentModal>
      {showAsk && <AskCommentRemoveModal onClick={onClick} />}
      {showConfirm && <ConfirmCommentRemoveModal />}
    </>
  );
};

export default CommentContainer;
