import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import LexadexLightImage from "@public/lexadex-light.png";

import { SearchIcon } from "./icons/SearchIcon";
import { Moon, Sun } from "lucide-react";

export function NavbarComponent() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="w-full fixed bg-neutral-50 shadow-sm border-b-2 top-0 h-16">
      <div></div>
      <div className="flex items-center justify-between h-full px-40 my-auto">
        <div className="flex items-center gap-x-20">
          <Image src={LexadexLightImage} alt="Logo App" className="w-48" />

          <ul className="flex gap-x-10">
            <li>
              <Link href={``}>Home</Link>
            </li>
            <li>
              <Link href={``}>Update</Link>
            </li>
            <li>
              <Link href={``}>Novel</Link>
            </li>
            <li>
              <Link href={``}>Browse</Link>
            </li>
            <li>
              <Link href={``}></Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-8">
          <button className="">
            <SearchIcon className="w-5 h-5" />
          </button>

          {resolvedTheme === "dark" ? (
            <button type="button" onClick={() => setTheme("light")}>
              <Moon className={`w-5 h-5 text-neutral-900 duration-300`} />
            </button>
          ) : (
            <button type="button" onClick={() => setTheme("dark")}>
              <Sun className={`w-5 h-5 text-neutral-900 duration-300`} />
            </button>
          )}

          <button className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 px-5 py-2 text-sm font-bold rounded-lg text-yellow-500 transition-colors hover:text-neutral-700">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
