import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PostItem from '../../components/post/PostItem';
import PostList from '../../components/post/PostList';
import { useUserState } from '../../contexts/user';
import { getPost } from '../../lib/api/post';

interface IPost {
  id?: number;
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
    const res = await getPost(state.token, path() as string);
    if (res) {
      setPosts(res.data.timelineResponses);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostList>
      {posts?.map((post) => (
        <PostItem
          key={post.id as number}
          title={post.title as string}
          content={post.content as string}
          author={'작성자: ' + (post.name as string)}
          isMine={post.isMine as boolean}
          createdAt={(post.createdAt as string)?.substring(0, 10)}
        />
      ))}
    </PostList>
  );
};

export default PostListContainer;
