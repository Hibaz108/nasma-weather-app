import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchData } from "@/api/weatherApi";
import type { WeatherStore } from "@/types/types";

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      weather: null,
      fetchWeather: async (city: string) => {
        try {
          const data = await fetchData(city);

          set({
            weather: data,
          });
        } catch (error) {
          console.error(error);
        }
      },
    }),

    {
      name: "weather-storage",
    },
  ),
);
