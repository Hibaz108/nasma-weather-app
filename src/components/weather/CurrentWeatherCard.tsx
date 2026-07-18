import { MapPin } from "lucide-react";
import { useWeatherStore } from "@/store/weatherStore";

const CurrentWeatherCard = () => {
  const weather = useWeatherStore((state) => state.weather);
  const unit = useWeatherStore((state) => state.unit);
  const currentTemp = weather
    ? Math.round(unit === "F" ? weather.current.temp_f : weather.current.temp_c)
    : "--";

  const maxTemp = weather
    ? Math.round(
        unit === "F"
          ? weather?.forecast.forecastday[0].day.maxtemp_f
          : weather?.forecast.forecastday[0].day.maxtemp_c,
      )
    : "--";

  const minTemp = weather
    ? Math.round(
        unit === "F"
          ? weather?.forecast.forecastday[0].day.mintemp_f
          : weather?.forecast.forecastday[0].day.mintemp_c,
      )
    : "--";

  //---------------------------------------------------------------------------

  return (
    <section className="flex flex-col items-center gap-3 mt-6">
      {/* location */}
      <p className="flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="size-4" />
        {` ${weather?.location.name} , ${weather?.location.country}`}
      </p>
      {/* === location === */}

      {/* current temp & icon */}
      <div className="flex items-center text-black">
        {weather && (
          <img
            src={`https:${weather.current.condition.icon}`}
            className="size-24 md:size-28"
            alt={weather.current.condition.text}
            draggable={false}
          />
        )}

        <p className="text-7xl md:text-8xl lg:text-9xl font-bold">
          {currentTemp}°
        </p>
      </div>
      {/* === current temp & icon === */}

      {/* desc & min and max temp */}
      <div className="flex flex-col items-center text-gray-400">
        <p className="text-xl">{weather?.current.condition.text}</p>
        <div className="flex gap-3 text-sm">
          <p>
            H:
            {maxTemp}°
          </p>
          <p>
            L:
            {minTemp}°
          </p>
        </div>
      </div>
      {/* === desc & min and max temp === */}
    </section>
  );
};

export default CurrentWeatherCard;
