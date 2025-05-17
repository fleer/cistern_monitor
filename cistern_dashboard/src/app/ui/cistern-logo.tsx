import { PresentationChartBarIcon } from "@heroicons/react/24/outline";

export default function CisternLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <PresentationChartBarIcon className="h-30 w-30" />
      <p className="text-[24px] ">Wasserstand</p>
    </div>
  );
}
