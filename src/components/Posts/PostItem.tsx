import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../api/jsonplaceholder';

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  const { id, title } = post;
  return (
    <div>
      <Link to={`/posts/${id}`}>
        {id}-{title}
      </Link>
    </div>
  );
}
