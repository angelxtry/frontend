import axios from 'axios';

export enum SNS_DIV {
  KAKAO = 'KAKAO',
  FACEBOOK = 'FACEBOOK',
}

export interface UserInfo {
  snsId: string;
  snsDiv: SNS_DIV;
  email: string;
  name: string;
  accessToken: string;
}

export interface LoginResponse {
  status: string;
  data: {
    token: string;
  };
}

export interface UserResponse {
  status: string;
  data: {
    id: string;
    name: string;
    email: string;
  };
}

const instance = axios.create({
  baseURL: 'http://localhost:8001',
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});

export async function login(userInfo: UserInfo) {
  const response = await instance.post<LoginResponse>('/login', {
    ...userInfo,
  });
  return response.data;
}

export async function me() {
  const response = await instance.get<UserResponse>('/me', {
    headers: { Authorization: localStorage.getItem('token') },
  });
  return response.data;
}
