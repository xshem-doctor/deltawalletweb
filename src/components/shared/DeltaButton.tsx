import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

type DeltaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function DeltaButton({
  href,
  children,
  variant = "primary",
  className,
}: DeltaButtonProps) {
  const classNames = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition",
    "focus:outline-none focus:ring-2 focus:ring-delta-orange focus:ring-offset-2 focus:ring-offset-delta-black",
    variant === "primary" && "bg-delta-orange text-delta-black hover:brightness-110",
    variant === "secondary" &&
      "border border-delta-charcoal bg-delta-nearBlack text-delta-softGray hover:border-delta-orange hover:text-white",
    className
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classNames}>
      {children}
    </Link>
  );
}
