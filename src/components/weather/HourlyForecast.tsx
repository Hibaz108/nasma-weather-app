import HourCard from "./HourCard";

const HourlyForecast = () => {
  return (
    <section className="bg-black mt-4 p-5 space-y-4 rounded-2xl shadow-xl ">
      <div className="flex justify-between ">
        <p className="text-gray-700 font-bold">Today</p>
        <p className="text-xs text-gray-500 font-medium">Next 6 hours</p>
      </div>

      {/* hour cards container */}
      <div className="flex gap-2 overflow-x-auto">
        <HourCard title="Now" temp={25} />
        <HourCard title="13:00" temp={26} />
        <HourCard title="14:00" temp={28} />
        <HourCard title="15:00" temp={30} />
        <HourCard title="16:00" temp={27} />
        <HourCard title="17:00" temp={26} />
        <HourCard title="18:00" temp={26} />
      </div>
      {/* === hour cards container === */}
    </section>
  );
};

export default HourlyForecast;
