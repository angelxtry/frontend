import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../modules/user/actions';
import { UserInfo } from '../../api/user';

export default function useLogin() {
  const dispatch = useDispatch();
  const login = useCallback(
    (userInfo: UserInfo) => dispatch(loginAsync.request(userInfo)),
    [dispatch],
  );

  return { login };
}
