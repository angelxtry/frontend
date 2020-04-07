import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function useProfile() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user.userResponse,
  );

  return { data, loading, error };
}
