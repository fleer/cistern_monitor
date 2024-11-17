import Image from "next/image";
import Link from "next/link";
// import NavLinks from "@/app/ui/dashboard/nav-links";
import CisternLogo from "@/app/ui/cistern-logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <CisternLogo />
        </div>
      </Link>
      <footer className="mt-auto">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/fleer/cistern_monitor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          fleer
        </a>
      </footer>
    </div>
  );
}
