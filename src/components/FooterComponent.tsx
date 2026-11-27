import Image from "next/image";

import { useTheme } from "next-themes";

import LogoDarkImage from "@public/lexadex-dark.png";
import LogoLightImage from "@public/lexadex-light.png";

export function FooterComponent() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="bg-neutral-200 dark:bg-neutral-800 min-h-20 mx-auto flex flex-col items-center py-10">
      {resolvedTheme === "dark" ? (
        <Image src={LogoLightImage} alt="Lexadex Icon" className="w-60" />
      ) : (
        <Image src={LogoDarkImage} alt="Lexadex Icon" className="w-60" />
      )}
      <div className="h-0.5 w-1/2 bg-neutral-500 dark:bg-neutral-900 my-3" />

      <p className="text-sm">&copy;2026 LexadexToon - Indonesian</p>
    </footer>
  );
}
