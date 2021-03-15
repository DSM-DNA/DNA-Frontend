import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadMoreButton from '../../components/post/LoadMoreButton';
import PostItem from '../../components/post/PostItem';
import PostList from '../../components/post/PostList';
import { useUserState } from '../../contexts/user';
import { getPost, removePost } from '../../lib/api/post';

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
            onRemove={async () => {
              const res = await removePost(
                state.token,
                post.timelineId as number,
              );
              if (res) {
                alert('삭제 성공');
                getPosts();
              } else {
                alert('삭제 실패');
              }
            }}
          />
        ))}
      </PostList>
      <LoadMoreButton onClick={onLoadMore} />
    </>
  );
};

export default PostListContainer;
