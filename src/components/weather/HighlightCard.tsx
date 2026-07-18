import type { HighlightCardProps } from "@/types/types";

const HighlightCard = ({
  title,
  Icon,
  value,
  unit,
  details,
}: HighlightCardProps) => {
  return (
    <div className="bg-card p-4 lg:p-6 space-y-2 rounded-xl shadow-sm">
      <p className="uppercase flex items-center gap-1.5 text-xs text-muted-foreground ">
        <Icon size={16} />
        {title}
      </p>

      <p className="text-foreground text-xl font-semibold">
        {typeof value === "number" ? Math.round(value) : value}
        {unit}
      </p>
      <p className="text-muted-foreground text-sm font-semibold">{details}</p>
    </div>
  );
};

export default HighlightCard;
