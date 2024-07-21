import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Measurement } from '@/types/measurement';

const apiUrl = 'http://localhost:8000/api/v1/measurement?skip=0&limit=100';
export function useData(): {
  data: Measurement[];
  error: Error;
  isLoading: Boolean;
} {
  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  console.log(data);
  return {
    data,
    error,
    isLoading,
  };
}
