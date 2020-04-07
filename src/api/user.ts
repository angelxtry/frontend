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

export interface UserResponse {
  status: string;
  data: {
    token: string;
  };
}

export async function login(userInfo: UserInfo) {
  const response = await axios.post<UserResponse>('https://serverEndPoint', {
    ...userInfo,
  });
  return response.data;
}
