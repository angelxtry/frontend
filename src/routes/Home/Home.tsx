import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>
        <Link to="/todo">Todo!</Link>
      </div>
      <div>
        <Link to="/posts">Posts!</Link>
      </div>
    </div>
  );
}
