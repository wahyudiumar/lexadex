import Link from "next/link";
import { usePathname } from "next/navigation";

import { AutoUpdateIcon } from "@components/icons/AutoUpdateIcon";
import { CoinsIcon } from "@components/icons/CoinsIcon";
import { HomeIcon } from "@components/icons/HomeIcon";
import { RankStarIcon } from "@components/icons/RankStarIcon";

export function NavbarBottom() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-2 z-50 inset-x-0">
      <div className="flex items-center px-10 justify-center gap-x-5 h-[50px] mx-auto max-w-max rounded-full border border-neutral-800 bg-neutral-900 ">
        <Link
          href=""
          className={` w-8 h-8 flex items-center justify-center rounded-full ${pathname === "/" ? "bg-yellow-400 fill-meutral-800" : "bg-transparent fill-neutral-400"}`}
        >
          <HomeIcon className="w-4" />
        </Link>
        <Link
          href=""
          className={` w-8 h-8 flex items-center justify-center rounded-full ${pathname === "/browse" ? "bg-yellow-400 fill-meutral-800" : "bg-transparent fill-neutral-400"}`}
        >
          <AutoUpdateIcon className="w-4" />
        </Link>
        <Link
          href=""
          className={` w-8 h-8 flex items-center justify-center rounded-full ${pathname === "/browse" ? "bg-yellow-400 fill-meutral-800" : "bg-transparent fill-neutral-400"}`}
        >
          <RankStarIcon className="w-4" />
        </Link>
        <Link
          href=""
          className={` w-8 h-8 flex items-center justify-center rounded-full ${pathname === "/browse" ? "bg-yellow-400 fill-meutral-800" : "bg-transparent fill-neutral-400"}`}
        >
          <CoinsIcon className="w-4" />
        </Link>
      </div>
    </nav>
  );
}
