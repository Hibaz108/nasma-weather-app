import { useWeatherStore } from "@/store/weatherStore";

const DailyForecast = () => {
  const weather = useWeatherStore((state) => state.weather);
  const unit = useWeatherStore((state) => state.unit);

  return (
    <section className="bg-neutral-300 rounded-2xl text-center">
      <table className="w-full">
        <thead>
          <tr>
            <th
              className="py-4 px-6 text-left font-bold text-gray-900"
              colSpan={4}
            >
              7-day forecast
            </th>
          </tr>
        </thead>

        <tbody className="[&_td]:p-2 divide-y divide-gray-400">
          {weather?.forecast.forecastday.slice(1).map((day) => (
            <tr key={day.date}>
              <td className="font-semibold">
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </td>
              <td className="flex justify-center items-center">
                <img
                  src={`https:${day.day.condition.icon}`}
                  alt={day.day.condition.text}
                  className="size-10"
                  draggable={false}
                />
              </td>
              <td className="text-gray-500">
                {unit === "C"
                  ? Math.round(day.day.mintemp_c)
                  : Math.round(day.day.mintemp_f)}
                °
              </td>
              <td className="text-gray-500">
                {unit === "C"
                  ? Math.round(day.day.maxtemp_c)
                  : Math.round(day.day.maxtemp_f)}
                °
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DailyForecast;
