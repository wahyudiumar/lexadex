import { useTheme } from "next-themes";
import { useResize } from "@hooks/useResize";

import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function NavbarComponent() {
  const { resolvedTheme } = useTheme();
  const resize = useResize();

  return (
    <header
      className={`w-full fixed shadow-sm border-b-0 top-0 h-20 z-50 ${resolvedTheme === "dark" ? "bg-[#121212]" : "bg-neutral-100"}`}
    >
      {resize === null ? null : resize > 1024 ? (
        <NavbarDesktop />
      ) : (
        <NavbarMobile />
      )}
    </header>
  );
}
