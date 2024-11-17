import { generateYAxis } from "@/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { fetchMeasurements } from "@/lib/data";
import { Measurement } from "@/lib/definitions";

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function FillLevelChart() {
  const measurement = await fetchMeasurements(11);
  // Reverse the array to show the latest data first
  measurement.reverse();

  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis();

  if (!measurement || measurement.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={" mb-4 text-xl md:text-2xl"}>Füllstand Historie</h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          {/* y-axis */}
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {measurement.map((m: Measurement) => {
            const datetime = new Date(m.timestamp);
            return (
              <div
                key={m.timestamp}
                className="flex flex-col items-center gap-2"
              >
                {/* bars */}
                <div
                  className="w-full rounded-md bg-blue-300"
                  style={{
                    height: `${(chartHeight / topLabel) * m.liters}px`,
                  }}
                ></div>
                {/* x-axis */}
                <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                  {datetime.getHours()}:{datetime.getMinutes()}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Monat</h3>
        </div>
      </div>
    </div>
  );
}
