import type { HighlightCardProps } from "@/types/types";

const HighlightCard = ({ title, Icon, value, unit }: HighlightCardProps) => {
  return (
    <div className="bg-gray-800 p-4 lg:p-6 space-y-2 rounded-xl shadow-sm">
      <p className="uppercase flex items-center gap-1.5 text-xs text-gray-500 ">
        <Icon size={16} />
        {title}
      </p>

      <p className="text-white text-xl font-semibold">
        {typeof value === "number" ? Math.round(value) : value}
        {unit}
      </p>
    </div>
  );
};

export default HighlightCard;
