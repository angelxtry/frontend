import axios from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts() {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data;
}

export async function getPost(id: string) {
  const response = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response.data;
}
