import { useEffect } from "react";
import { useWeatherStore } from "@/store/weatherStore";

export const useTheme = () => {
  const theme = useWeatherStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
};
