import type { LucideIcon } from "lucide-react";
import Card from "./Card";

type InfoCardProps = {
  title: string;
  body: string;
  icon?: LucideIcon;
};

export default function InfoCard({ title, body, icon: Icon }: InfoCardProps) {
  return (
    <Card>
      {Icon ? <Icon className="h-7 w-7 text-delta-orange" /> : null}
      <h3 className={Icon ? "mt-5 text-lg font-semibold text-white" : "text-lg font-semibold text-white"}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-delta-lightGray/65">{body}</p>
    </Card>
  );
}
