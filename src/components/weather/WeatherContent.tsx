//components
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeatherHighlights from "./WeatherHighlights";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import Conditions from "./Conditions";
//other
import { useWeatherStore } from "@/store/weatherStore";
import { Skeleton } from "@/components/ui/skeleton";

const WeatherContent = () => {
  const loading = useWeatherStore((state) => state.loading);
  const error = useWeatherStore((state) => state.error);

  if (loading)
    return (
      <div className="flex w-full items-center justify-center gap-4 mt-4">
        <Skeleton className="size-10 shrink-0 rounded-full bg-gray-800" />
        <div className="grid gap-2">
          <Skeleton className="h-4 w-[300px] bg-gray-800" />
          <Skeleton className="h-4 w-[150px] bg-gray-800" />
        </div>
      </div>
    );

  if (error)
    return <p className="mt-4 text-red-500 text-lg text-center">{error}</p>;

  return (
    <>
      <CurrentWeatherCard />
      <WeatherHighlights />
      <HourlyForecast />
      <div className="grid md:grid-cols-2 gap-3 mt-6">
        <DailyForecast />
        <Conditions />
      </div>
    </>
  );
};

export default WeatherContent;
