import type { HourCardProps } from "@/types/types";
import { Sun } from "lucide-react";
const HourCard = ({ title, temp }: HourCardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-1 w-20 h-28 md:w-24 md:h-32 
    p-4 shrink-0 rounded-2xl bg-gray-800 text-white"
    >
      <p className="text-sm">{title}</p>
      <span>
        <Sun className="size-6" />
      </span>
      <p className="text-xs md:text-sm font-semibold">{temp}°</p>
    </div>
  );
};

export default HourCard;
