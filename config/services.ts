import {
  Gamepad2,
  Smartphone,
  Wifi,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
  className?: string;
};

export const services: ServiceItem[] = [
  {
    titleKey: "giftCards",
    descriptionKey: "giftCardsText",
    icon: Gamepad2,
    className: "md:col-span-2",
  },
  {
    titleKey: "esim",
    descriptionKey: "esimText",
    icon: Wifi,
  },
  {
    titleKey: "phoneRefill",
    descriptionKey: "phoneRefillText",
    icon: Smartphone,
  },
  {
    titleKey: "coming",
    descriptionKey: "comingText",
    icon: Sparkles,
    className: "md:col-span-2",
  },
];