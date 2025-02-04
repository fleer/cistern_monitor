"use client";
import React, { useState, useEffect } from "react";
import CardWrapper from "@/app/ui/cards";
import { CardsSkeleton, BarChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

import { fetchDailyMeasurements } from "@/lib/data";
import { DailyMeasurement } from "@/lib/definitions";
import BarChart from "@/app/ui/plots/bar-chart";

const Overview: React.FC = () => {
  const [data, setData] = useState<DailyMeasurement[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const measurements = await fetchDailyMeasurements(11);
        setData(measurements);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  const date: string[] = data
    .map((m) => {
      const measurementDate = new Date(m.date);
      return `${String(measurementDate.getDate())}.${String(measurementDate.getMonth() + 1)}`;
    })
    .sort();
  const liters: number[] = data.map((m) => m.liters);
  return (
    <div>
      <main>
        <h1 className={"mb-4 text-xl md:text-2xl"}>Dashboard</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper fillLevel={liters[0]} />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<BarChartSkeleton />}>
            <BarChart days={date} liters={liters} />
          </Suspense>
        </div>
      </main>
    </div>
  );
};
export default Overview;
