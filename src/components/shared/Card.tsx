import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-delta-nearBlack p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
