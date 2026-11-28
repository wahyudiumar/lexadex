import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";
import LogoDarkImage from "@public/lexadex-dark.png";
import LogoLightImage from "@public/lexadex-light.png";

import { MoonIcon } from "../icons/MoonIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { SunIcon } from "../icons/SunIcon";
export function NavbarDesktop() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between h-full px-20 lg:px-40 my-auto">
      <div className="flex items-center gap-x-20">
        {resolvedTheme === "dark" ? (
          <Image src={LogoLightImage} alt="Logo App" className="w-48" />
        ) : (
          <Image src={LogoDarkImage} alt="Logo App" className="w-48" />
        )}

        <ul className="flex gap-x-10">
          <li>
            <Link href={``}>Home</Link>
          </li>
          <li>
            <Link href={``}>Update</Link>
          </li>
          <li>
            <Link href={``}>Rangking</Link>
          </li>
          <li>
            <Link href={``}>Browse</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <button>
          <SearchIcon className="w-5 h-5" />
        </button>

        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme !== "dark" ? (
            <MoonIcon className="w-5 h-5 text-neutral-800 duration-300" />
          ) : (
            <SunIcon className="w-5 h-5 text-neutral-100 duration-300" />
          )}
        </button>

        <button className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 px-5 py-2 text-sm font-bold rounded-lg text-yellow-500 transition-colors hover:text-neutral-700">
          Login
        </button>
      </div>
    </div>
  );
}
