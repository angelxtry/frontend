import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../modules/jsonPlaceHolder/actions';
import { RootState } from '../../modules';

export default function usePosts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsAsync.request(null));
  }, [dispatch]);

  const { data, loading, error } = useSelector(
    (state: RootState) => state.jsonPlaceHolder.posts,
  );
  return { data, loading, error };
}
