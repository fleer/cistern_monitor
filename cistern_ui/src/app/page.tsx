'use client';
import { useData } from '@/hooks/fetchData';
import { HistoryChart } from '@/components/timeLine';

export default function Home() {
  const { data, error, isLoading } = useData();

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
