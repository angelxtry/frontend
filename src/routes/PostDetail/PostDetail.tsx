import React from 'react';
import { useParams } from 'react-router-dom';
import usePost from '../../hooks/jsonPlaceHolder/usePost';

interface RouteParams {
  id: string;
}

export default function PostDetail() {
  const params = useParams<RouteParams>();
  const { data, loading, error } = usePost(params.id);
  return (
    <div>
      {loading && <div>로딩중...</div>}
      {error && <div>에러 발생!{error}</div>}
      {data && (
        <>
          <div>User ID: {data.userId}</div>
          <div>Post ID: {data.id}</div>
          <div>Title: {data.title}</div>
          <div>Body: {data.body}</div>
        </>
      )}
    </div>
  );
}
