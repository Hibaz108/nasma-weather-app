import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchData } from "@/api/weatherApi";
import type { WeatherStore } from "@/types/types";

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      weather: null,
      loading: true,
      error: null,
      fetchWeather: async (city: string) => {
        set({
          loading: true,
          error: null,
        });
        try {
          const data = await fetchData(city);

          set({
            weather: data,
            loading: false,
          });
        } catch (err) {
          set({
            loading: false,
            error: err instanceof Error ? err.message : "Something went wrong",
          });
        }
      },
    }),

    {
      name: "weather-storage",
    },
  ),
);
