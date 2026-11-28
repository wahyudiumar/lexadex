import Image from "next/image";

import { useTheme } from "next-themes";
import LogoDarkImage from "@public/lexadex-dark.png";
import LogoLightImage from "@public/lexadex-light.png";

import { MoonIcon } from "../icons/MoonIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { SunIcon } from "../icons/SunIcon";
import { UserIcon } from "../icons/UserIcon";

export function NavbarMobile() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between h-full px-10 sm:px-20 lg:px-40 my-auto">
      <div className="flex items-center gap-x-20">
        {resolvedTheme === "dark" ? (
          <Image src={LogoLightImage} alt="Logo App" className="w-36 sm:w-48" />
        ) : (
          <Image src={LogoDarkImage} alt="Logo App" className="w-36 sm:w-48" />
        )}
      </div>

      <div className="flex items-center gap-x-6 sm:gap-x-8">
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

        <button className="bg-neutral-500 p-1 rounded-full">
          <UserIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
