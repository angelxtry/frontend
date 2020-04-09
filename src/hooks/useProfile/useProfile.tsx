import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { loadUserAsync } from '../../modules/user/actions';

export default function useProfile() {
  const dispatch = useDispatch();
  const me = useCallback(() => {
    dispatch(loadUserAsync.request(null));
  }, [dispatch]);

  return { me };
}
