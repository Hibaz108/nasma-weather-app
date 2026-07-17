import type { HourCardProps } from "@/types/types";
const HourCard = ({ title, temp, url, alt }: HourCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 w-20 h-28 md:w-24 md:h-32 
    p-4 shrink-0 rounded-2xl ${title === "Now" ? "bg-gray-300 text-black" : " bg-gray-800 text-white"}`}
    >
      <p className="text-sm">{title}</p>
      <img src={url} alt={alt} className="size-8" draggable={false} />
      <p className="text-xs md:text-sm font-semibold">{Math.round(temp)}°</p>
    </div>
  );
};

export default HourCard;
