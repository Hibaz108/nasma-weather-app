import { useEffect } from "react";
import { useWeatherStore } from "@/store/weatherStore";

export const useInitialWeather = () => {
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);

  useEffect(() => {
    if (!navigator.geolocation) {
      fetchWeather("London");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(`${pos.coords.latitude},${pos.coords.longitude}`),
      () => fetchWeather("London"),
    );
  }, [fetchWeather]);
};
