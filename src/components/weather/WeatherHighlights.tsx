import HighlightCard from "./HighlightCard";
//icons
import { Droplets, Wind, Eye, Sunrise } from "lucide-react";

const WeatherHighlights = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
      <HighlightCard title="Humidity" Icon={Droplets} value={59} unit="%" />
      <HighlightCard title="Wind" Icon={Wind} value={22} unit=" km/h" />
      <HighlightCard title="Visibility" Icon={Eye} value={10} unit=" km" />
      <HighlightCard title="Sunrise" Icon={Sunrise} value="05:00 AM" />
    </div>
  );
};

export default WeatherHighlights;
