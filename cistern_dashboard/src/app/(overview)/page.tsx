import CardWrapper from "@/app/ui/cards";
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import FillLevelChart from "@/app/ui/plots/fill-chart";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className={"mb-4 text-xl md:text-2xl"}>Dashboard</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {/* <Suspense fallback={<RevenueChartSkeleton />}> */}
          <FillLevelChart />
          {/* </Suspense> */}
        </div>
      </main>
    </div>
  );
}
