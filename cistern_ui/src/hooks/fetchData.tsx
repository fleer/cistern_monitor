import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Measurement } from '@/types/measurement';

export function useData(apiUrl: string): {
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
