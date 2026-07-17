//components
import HighlightCard from "./HighlightCard";
//icons
import { Droplets, Wind, Eye, Sunrise } from "lucide-react";
//other
import { useWeatherStore } from "@/store/weatherStore";

const WeatherHighlights = () => {
  const weather = useWeatherStore((state) => state.weather);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
      <HighlightCard
        title="Humidity"
        Icon={Droplets}
        value={weather?.current.humidity ?? "--"}
        unit="%"
      />
      <HighlightCard
        title="Wind"
        Icon={Wind}
        value={weather?.current.wind_kph ?? "--"}
        unit=" km/h"
      />
      <HighlightCard
        title="Visibility"
        Icon={Eye}
        value={weather?.current.vis_km ?? "--"}
        unit=" km"
      />
      <HighlightCard
        title="Sunrise"
        Icon={Sunrise}
        value={weather?.forecast.forecastday[0].astro.sunrise ?? "--"}
      />
    </div>
  );
};

export default WeatherHighlights;
