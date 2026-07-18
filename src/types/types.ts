import type { LucideIcon } from "lucide-react";

export type HighlightCardProps = {
  title: string;
  Icon: LucideIcon;
  value: number | string;
  unit?: string;
  details?: string;
};

export type HourCardProps = {
  title: string;
  temp: number;
  url: string;
  alt: string;
};

export type WeatherType = {
  current: {
    vis_km: number;
    temp_c: number;
    temp_f: number;
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    chance_of_rain: number;
    pressure_mb: number;
    uv: number;
    condition: {
      icon: string;
      text: string;
    };
  };

  location: {
    country: string;
    name: string;
    localtime: string;
  };

  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        daily_chance_of_rain: number;
        condition: {
          icon: string;
          text: string;
        };
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
      hour: {
        temp_c: number;
        temp_f: number;
        time: string;
        condition: {
          icon: string;
          text: string;
        };
      }[];
    }[];
  };
};

export type WeatherStore = {
  weather: WeatherType | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
  unit: "C" | "F";
  setUnit: (unit: "C" | "F") => void;
};
