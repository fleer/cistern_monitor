import {
  RocketLaunchIcon,
  ClockIcon,
  CalendarIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { fetchFillLevel } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType } = {
  current: RocketLaunchIcon,
  month: CalendarIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

interface CardWrapperProps {
  fillLevel: number;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ fillLevel }) => {
  return (
    <>
      {fillLevel ? (
        <Card title="Füllstand" value={fillLevel} type="current" />
      ) : null}
    </>
  );
};

// const {
//   numberOfInvoices,
//   numberOfCustomers,
//   totalPaidInvoices,
//   totalPendingInvoices,
// } = await fetchCardData();
//   let fillLevel = null;
//   try {
//     fillLevel = await fetchFillLevel();
//   } catch (error) {
//     console.error(error);
//   }
//
//   return (
//     <>
//       {fillLevel ? (
//         <Card title="Füllstand" value={fillLevel} type="current" />
//       ) : null}
//       {/* <Card title="Höchststand (Monat)" value={fillLevel} type="month" /> */}
//       {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
//       {/* <Card */}
//       {/*   title="Total Customers" */}
//       {/*   value={numberOfCustomers} */}
//       {/*   type="customers" */}
//       {/* /> */}
//     </>
//   );
// }

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
    <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? (
          <Icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : null}
        <h3 className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="truncate rounded-xl bg-white dark:bg-gray-700 px-4 py-8 text-center text-2xl text-gray-900 dark:text-gray-100">
        {value}
      </p>
    </div>
  );
}

export default CardWrapper;
