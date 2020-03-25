import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAsync } from '../../modules/jsonPlaceHolder/actions';
import { RootState } from '../../modules';

export default function usePost(id: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAsync.request(id));
  }, [dispatch, id]);

  const { data, loading, error } = useSelector(
    (state: RootState) => state.jsonPlaceHolder.post,
  );
  return { data, loading, error };
}
