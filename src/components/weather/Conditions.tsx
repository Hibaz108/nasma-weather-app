import HighlightCard from "./HighlightCard";
import { CloudRain, Thermometer, Gauge, Sunset } from "lucide-react";

const Conditions = () => {
  return (
    <section className="bg-black p-5 space-y-3 rounded-2xl">
      <h3 className="text-white text-lg font-bold ">Conditions</h3>

      <div className="flex items-center justify-around gap-3 p-3 bg-gray-800 text-white rounded-2xl ">
        {/* left */}
        <div className="flex flex-col justify-center items-center h-22 w-23 p-2 border-8  rounded-full">
          <p className="text-3xl font-bold">7</p>
          <p className="text-sm font-semibold">UV</p>
        </div>
        {/* === left === */}

        {/* right */}
        <div>
          <p className="text-xs font-medium text-gray-500">UV INDEX</p>
          <p className="text-2xl font-bold">High</p>
          <p className="text-gray-400">High exposure risk</p>
        </div>
        {/* === right === */}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <HighlightCard
          title="Chance of rain"
          Icon={CloudRain}
          value={8}
          unit="%"
        />
        <HighlightCard
          title="Feels like"
          Icon={Thermometer}
          value={25}
          unit="°"
        />

        <HighlightCard title="Pressure" Icon={Gauge} value={900} />
        <HighlightCard title="Sunset" Icon={Sunset} value="09:00 PM" />
      </div>
    </section>
  );
};

export default Conditions;
