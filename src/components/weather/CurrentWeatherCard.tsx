import { MapPin, Sun } from "lucide-react";
import { useWeatherStore } from "@/store/weatherStore";
import { useEffect } from "react";
const CurrentWeatherCard = () => {
  const weather = useWeatherStore((state) => state.weather);
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);

  useEffect(() => {
    fetchWeather("Oslo");
  }, []);

  return (
    <section className="flex flex-col items-center gap-3 mt-6">
      {/* location */}
      <p className="flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="size-4" />
        {` ${weather?.location.name},${weather?.location.country}`}
      </p>
      {/* === location === */}

      {/* current temp & icon */}
      <div className="flex items-center text-black">
        <span>
          <Sun className="size-16" />
        </span>
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold">30°</p>
      </div>
      {/* === current temp & icon === */}

      {/* desc & min and max temp */}
      <div className="flex flex-col items-center text-gray-400">
        <p className="text-xl">Sunny</p>
        <div className="flex gap-3 text-sm">
          <p className="">
            H: {weather?.forecast.forecastday[0].day.mintemp_c}°
          </p>
          <p className="">
            L: {weather?.forecast.forecastday[0].day.maxtemp_c}°
          </p>
        </div>
      </div>
      {/* === desc & min and max temp === */}
    </section>
  );
};

export default CurrentWeatherCard;
