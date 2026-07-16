import type { LucideIcon } from "lucide-react";

export type HighlightCardProps = {
  title: string;
  Icon: LucideIcon;
  value: number | string;
  unit?: string;
};

export type HourCardProps = {
  title: string;
  temp: number;
};
