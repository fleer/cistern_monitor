import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

interface CardWrapperProps {
  fillLevel: number;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ fillLevel }) => {
  return <>{fillLevel ? <Card title="Füllstand" value={fillLevel} /> : null}</>;
};

export function Card({
  title,
  value,
}: {
  title: string;
  value: number | string;
}): React.JSX.Element {
  return (
    <div className="rounded-xl bg-blue-800 dark:bg-gray-800 p-2 shadow-sm">
      <div className="flex p-4">
        <RocketLaunchIcon className="h-5 w-5 text-white dark:text-gray-300" />
        <h3 className="ml-2 text-sm font-medium text-white dark:text-gray-100">
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
