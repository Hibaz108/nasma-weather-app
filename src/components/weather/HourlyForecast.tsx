import HourCard from "./HourCard";
import { useWeatherStore } from "@/store/weatherStore";

const HourlyForecast = () => {
  const weather = useWeatherStore((state) => state.weather);
  const currentHour = weather
    ? new Date(weather.location.localtime).getHours()
    : 0;
  const hoursToday = weather?.forecast.forecastday[0].hour;
  const hoursTomorrow = weather?.forecast.forecastday[1].hour;
  const nextHours = [
    ...(hoursToday?.slice(currentHour) || []),
    ...(hoursTomorrow || []),
  ].slice(0, 7);

  //--------------------------------------------------------------------------

  return (
    <section className="bg-black mt-4 p-5 space-y-4 rounded-2xl shadow-xl ">
      <div className="flex justify-between ">
        <p className="text-gray-700 font-bold">Today</p>
        <p className="text-xs text-gray-500 font-medium">Next 6 hours</p>
      </div>

      {/* hour cards container */}
      <div className="flex gap-2 overflow-x-auto">
        {nextHours.map((hour, index) => (
          <HourCard
            key={hour.time}
            title={index === 0 ? "Now" : hour.time.split(" ")[1]}
            temp_c={hour.temp_c}
            temp_f={hour.temp_f}
            url={`https:${hour.condition.icon}`}
            alt={hour.condition.text}
          />
        ))}
      </div>
      {/* === hour cards container === */}
    </section>
  );
};

export default HourlyForecast;
