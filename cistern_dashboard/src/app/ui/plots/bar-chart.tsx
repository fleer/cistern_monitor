import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";

interface BarChartProps {
  days: string[];
  liters: number[];
}

const BarChart: React.FC<BarChartProps> = ({ days, liters }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: days,
          datasets: [
            {
              label: "Füllstand",
              data: liters,
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              title: {
                display: true,
                text: "Füllstand in Liter",
              },
              beginAtZero: true,
            },
            x: {
              title: {
                display: true,
                text: "Datum",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Täglicher Füllstand",
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
          animation: {
            duration: 9000,
            easing: "easeOutElastic",
          },
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [days, liters]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
