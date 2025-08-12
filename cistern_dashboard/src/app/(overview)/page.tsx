"use client"; // Indicates that this file is a client-side component

import CardWrapper from "@/app/ui/cards"; // Import CardWrapper component
import { BarChartSkeleton, CardsSkeleton } from "@/app/ui/skeletons"; // Import skeleton components for loading states
import React, { Suspense, useEffect, useState } from "react"; // Import React and hooks

import BarChart from "@/app/ui/plots/bar-chart"; // Import BarChart component
import { fetchCurrentFillLevel, fetchDailyMeasurements } from "@/lib/data"; // Import data fetching functions
import { DailyMeasurement } from "@/lib/definitions"; // Import type definitions

const Overview: React.FC = () => {
  const [data, setData] = useState<DailyMeasurement[]>([]); // State to store daily measurements data
  const [currentState, setCurrentState] = useState<number>(0); // State to store current fill level

  // Fetch daily measurements on component mount
  useEffect(() => {
    const fetch = async () => {
      try {
        const measurements = await fetchDailyMeasurements(10000); // Fetch last 10 daily measurements
        setData(measurements); // Update state with fetched data
      } catch (error) {
        console.error(error); // Log any errors
      }
    };
    fetch();
  }, []);

  // Fetch current fill level on component mount
  useEffect(() => {
    const fetchCurrentState = async () => {
      try {
        const measurement = await fetchCurrentFillLevel(); // Fetch current fill level
        setCurrentState(measurement); // Update state with fetched data
      } catch (error) {
        console.error(error); // Log any errors
      }
    };
    fetchCurrentState();
  }, []);

  const fillLevel = currentState; // Store current fill level in a variable
  const date: string[] = data.sort().map((m) => {
    const measurementDate = new Date(m.date); // Convert date string to Date object
    return `${String(measurementDate.getDate()).padStart(2, "0")}.${String(measurementDate.getMonth() + 1).padStart(2, "0")}`; // Format date as "day.month"
  });
  const liters: number[] = data.map((m) => m.liters); // Extract liters from data

  return (
    <div>
      <main>
        <h1 className={"mb-4 text-xl md:text-2xl"}>Dashboard</h1>{" "}
        {/* Page title */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            {" "}
            {/* Show CardsSkeleton while loading */}
            <CardWrapper fillLevel={fillLevel} />{" "}
            {/* Render CardWrapper with fill level */}
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<BarChartSkeleton />}>
            {" "}
            {/* Show BarChartSkeleton while loading */}
            <BarChart days={date} liters={liters} />{" "}
            {/* Render BarChart with dates and liters */}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Overview; // Export Overview component as default
