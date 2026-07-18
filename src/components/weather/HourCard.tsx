import type { HourCardProps } from "@/types/types";
import { useWeatherStore } from "@/store/weatherStore";

const HourCard = ({ title, temp_c, temp_f, url, alt }: HourCardProps) => {
  const unit = useWeatherStore((state) => state.unit);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 w-20 h-28 md:w-24 md:h-32 
    p-4 shrink-0 rounded-2xl ${
      title === "Now"
        ? "bg-background text-muted-foreground"
        : "bg-card text-foreground"
    }`}
    >
      <p className="text-sm">{title}</p>
      <img src={url} alt={alt} className="size-8" draggable={false} />
      <p className="text-xs md:text-sm font-semibold">
        {unit === "C" ? Math.round(temp_c) : Math.round(temp_f)}°
      </p>
    </div>
  );
};

export default HourCard;
