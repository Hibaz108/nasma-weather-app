import { MapPin, Sun } from "lucide-react";

const CurrentWeatherCard = () => {
  return (
    <section className="flex flex-col items-center gap-3 mt-6">
      {/* location */}
      <p className="flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="size-4" />
        Rome , Italy
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
          <p className="">H: 24°</p>
          <p className="">L: 35°</p>
        </div>
      </div>
      {/* === desc & min and max temp === */}
    </section>
  );
};

export default CurrentWeatherCard;
