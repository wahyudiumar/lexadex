import { useEffect, useState } from "react";

export function useResize() {
  const [responsive, setResponsive] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return responsive;
}
