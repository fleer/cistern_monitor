"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);
import { Measurement } from "@/types/measurement";

interface HistoryChartProps {
  chartData: Measurement[];
}
export const HistoryChart: React.FC<HistoryChartProps> = ({ chartData }) => {
  // export function HistoryChart(chartData: Measurement[]) {
  if (!chartData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-12 w-12"></div>
      </div>
    );
  }

  const data = {
    labels: chartData.map((entry: Measurement) =>
      new Date(entry.timestamp).toLocaleDateString(),
    ),
    datasets: [
      {
        label: "Liter",
        data: chartData.map((entry: Measurement) => entry.liters),
        borderColor: "orange",
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};
