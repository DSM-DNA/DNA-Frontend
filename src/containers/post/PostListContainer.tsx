import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AskPostRemoveModal from '../../components/modal/AskPostRemoveModal';
import ConfirmPostRemoveModal from '../../components/modal/ConfirmPostRemoveModal';
import LoadMoreButton from '../../components/post/LoadMoreButton';
import PostItem from '../../components/post/PostItem';
import PostList from '../../components/post/PostList';
import { useUserState } from '../../contexts/user';
import { getPost, removePost } from '../../lib/api/post';
import CommentContainer from '../comment/CommentContainer';

interface IPost {
  timelineId?: number;
  title?: string;
  content?: string;
  name?: string;
  isMine?: boolean;
  createdAt?: string;
  type?: string;
}

const PostListContainer: React.FC = () => {
  const state = useUserState();

  const [posts, setPosts] = useState<IPost[]>();
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [showAsk, setShowAsk] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [commentId, setCommentId] = useState(0);
  const [removeId, setRemoveId] = useState(0);

  const location = useLocation();
  const path = () => {
    switch (location.pathname) {
      case '/adenine':
        return 'WORKER';
      case '/guanine':
        return 'DIVER';
      case '/citosine':
        return 'COMMON';
      case '/thymine':
        return 'BUYER';
    }
  };

  const getPosts = async () => {
    const res = await getPost(state.token, path() as string, page);
    if (res) {
      if (posts) {
        setPosts([...posts, ...res.data.timelineResponses]);
      } else {
        setPosts(res.data.timelineResponses);
      }
      setPages(res.data.totalPages);
    }
  };

  const onLoadMore = async () => {
    if (page === pages - 1) {
      alert('마지막 내용입니다.');
      return;
    }
    setPage(page + 1);
  };

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    switch (e.currentTarget.name) {
      case 'submit':
        rmPost();
        break;
      case 'cancel':
        setShowAsk(false);
        break;
    }
  };

  const rmPost = async () => {
    const res = await removePost(state.token, removeId);
    if (res) {
      setShowAsk(false);
      setShowConfirm(true);
      setTimeout(() => {
        setShowConfirm(false);
        setPosts(posts?.filter((post) => post.timelineId !== removeId));
      }, 1000);
    }
  };

  useEffect(() => {
    getPosts();
  }, [page]);

  return (
    <>
      <PostList>
        {posts?.map((post) => (
          <PostItem
            key={post.timelineId as number}
            title={post.title as string}
            content={post.content as string}
            author={'작성자: ' + (post.name as string)}
            isMine={post.isMine as boolean}
            createdAt={(post.createdAt as string)?.substring(0, 10)}
            onClick={() => {
              setCommentId(post.timelineId as number);
              setShowComment(true);
            }}
            onRemove={() => {
              setRemoveId(post.timelineId as number);
              setShowAsk(true);
            }}
          />
        ))}
      </PostList>
      <LoadMoreButton onClick={onLoadMore} />
      {showAsk && <AskPostRemoveModal onClick={onClick} />}
      {showConfirm && <ConfirmPostRemoveModal />}
      {showComment && (
        <CommentContainer
          onClose={(e) => {
            if (e.target === e.currentTarget) {
              setShowComment(false);
            }
          }}
          timelineId={commentId}
        />
      )}
    </>
  );
};

export default PostListContainer;
