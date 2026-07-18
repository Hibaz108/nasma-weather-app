//components
import HighlightCard from "./HighlightCard";
//icons
import { CloudRain, Thermometer, Gauge, Sunset } from "lucide-react";
//other
import { useWeatherStore } from "@/store/weatherStore";
import {
  getUvLevel,
  getRainLevel,
  getFeelsLikeDescription,
} from "@/lib/weather";

const Conditions = () => {
  const weather = useWeatherStore((state) => state.weather);
  const uv = weather?.current.uv;
  const uvValue = uv != null ? Math.round(uv) : "--";
  const uvLevel = getUvLevel(uv);

  const chanceOfRain =
    weather?.forecast.forecastday[0].day.daily_chance_of_rain;

  const unit = useWeatherStore((state) => state.unit);
  const temp = unit === "C" ? weather?.current.temp_c : weather?.current.temp_f;
  const feelsLike =
    unit === "C" ? weather?.current.feelslike_c : weather?.current.feelslike_f;

  return (
    <section className="bg-container p-5 space-y-3 rounded-2xl">
      <h3 className="text-foreground text-lg font-bold ">Conditions</h3>

      <div className="flex items-center justify-around gap-3 p-3 bg-card rounded-2xl ">
        {/* left */}
        <div
          className={`flex flex-col justify-center items-center h-22 w-23 p-2 border-8 ${uvLevel.borderColor} rounded-full`}
        >
          <p className="text-3xl font-bold">{uvValue}</p>
          <p className="text-sm font-semibold">UV</p>
        </div>
        {/* === left === */}

        {/* right */}
        <div>
          <p className="text-xs font-medium text-gray-500">UV INDEX</p>
          <p className="text-2xl font-bold">{uvLevel.label}</p>
          <p className="text-gray-400">{uvLevel.risk}</p>
        </div>
        {/* === right === */}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <HighlightCard
          title="Chance of rain"
          Icon={CloudRain}
          value={chanceOfRain ?? "--"}
          unit="%"
          details={getRainLevel(chanceOfRain)}
        />
        <HighlightCard
          title="Feels like"
          Icon={Thermometer}
          value={feelsLike ?? "--"}
          unit="°"
          details={getFeelsLikeDescription(temp, feelsLike)}
        />

        <HighlightCard
          title="Pressure"
          Icon={Gauge}
          value={weather?.current.pressure_mb ?? "--"}
          details="hPa"
        />
        <HighlightCard
          title="Sunset"
          Icon={Sunset}
          value={weather?.forecast.forecastday[0].astro.sunset ?? "--"}
          details="Golden hour"
        />
      </div>
    </section>
  );
};

export default Conditions;
