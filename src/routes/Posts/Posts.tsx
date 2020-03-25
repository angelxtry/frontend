import React from 'react';
import usePosts from '../../hooks/jsonPlaceHolder/usePosts';
import PostItem from '../../components/Posts/PostItem';

export default function PostList() {
  const { data, loading, error } = usePosts();
  return (
    <div>
      {loading && <div>로딩중...</div>}
      {error && <div>에러 발생!{error}</div>}
      {data?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
