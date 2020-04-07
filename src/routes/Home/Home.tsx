import React from 'react';
import { Link } from 'react-router-dom';
import LoginFacebook from '../../components/LoginFacebook';
import useLogin from '../../hooks/useLogin';
import { UserInfo } from '../../api/user';
import useProfile from '../../hooks/useProfile';

export default function Home() {
  const { login } = useLogin();
  const callback = (userInfo: UserInfo) => {
    console.log({ userInfo });
    login(userInfo);
  };

  const { data } = useProfile();

  return (
    <div>
      <div>
        <Link to="/todo">Todo!</Link>
      </div>
      <div>
        <Link to="/posts">Posts!</Link>
      </div>
      {data?.data.token ? (
        <div>Logged In.</div>
      ) : (
        <div>
          <LoginFacebook callback={callback} />
        </div>
      )}
    </div>
  );
}
