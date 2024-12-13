import {
  RocketLaunchIcon,
  ClockIcon,
  CalendarIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { fetchMeasurements } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType } = {
  current: RocketLaunchIcon,
  month: CalendarIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  let measurements = null;
  try {
    measurements = await fetchMeasurements();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      {measurements ? (
        <Card title="Füllstand" value={measurements[0].liters} type="current" />
      ) : null}
      {/* <Card title="Höchststand (Monat)" value={fillLevel} type="month" /> */}
      {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
      {/* <Card */}
      {/*   title="Total Customers" */}
      {/*   value={numberOfCustomers} */}
      {/*   type="customers" */}
      {/* /> */}
    </>
  );
}

// TODO: Cards with other information
export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "month" | "current";
}): JSX.Element {
  const Icon: React.ComponentType = iconMap[type];
  console.log(type);

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
        {Icon ? <Icon /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className=" truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
        {value}
      </p>
    </div>
  );
}
