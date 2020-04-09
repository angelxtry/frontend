import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useProfile from '../../hooks/useProfile';
import { RootState } from '../../modules';
import useLogin from '../../hooks/useLogin';
import { UserInfo } from '../../api/userApi';
import LoginFacebook from '../../components/LoginFacebook';

export default function Home() {
  const { login } = useLogin();
  const { me } = useProfile();
  const callback = (userInfo: UserInfo) => {
    login(userInfo);
  };
  const { isLoggedIn } = useSelector((state: RootState) => state.userStore);
  const { data: userResponse } = useSelector(
    (state: RootState) => state.userStore.user,
  );
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (isLoggedIn || token) {
      me();
    }
  }, [isLoggedIn, token, me]);

  return (
    <div>
      <div>
        <Link to="/todo">Todo!</Link>
      </div>
      <div>
        <Link to="/posts">Posts!</Link>
      </div>
      {userResponse?.data.id ? (
        <div>Welcome {userResponse.data.name}</div>
      ) : (
        <div>
          <LoginFacebook callback={callback} />
        </div>
      )}
    </div>
  );
}
