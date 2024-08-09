'use client';
import { useData } from '@/hooks/fetchData';
import { getServerSideProps } from '@/hooks/getServerSideProps';
import { HistoryChart } from '@/components/timeLine';
import type { InferGetServerSidePropsType } from 'next';

export default function Home({
  config,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const apiUrl: string = config.service_url;
  console.log(process.cwd());
  const apiUrl: string = 'http://localhost:8000';

  const { data, error, isLoading } = useData(apiUrl);

  if (error) {
    return (
      <div className="text-center h-screen text-2xl p-10 text-[#f59e0b]">
        Oops! <br></br> Error loading data
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center h-screen text-2xl p-10 text-[#f59e0b]">
        Loading data!
      </div>
    );
  }

  return (
    <div className="text-center">
      <HistoryChart chartData={data} />
    </div>
  );
}
