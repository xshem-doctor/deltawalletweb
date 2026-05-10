import Link from "next/link";
import { cn } from "@/utils/cn";

type DeltaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "shine";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function DeltaButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: DeltaButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-delta-orange focus:ring-offset-2 focus:ring-offset-delta-black",
        variant === "primary" &&
          "bg-delta-orange text-delta-black hover:brightness-110",
        variant === "secondary" &&
          "border border-delta-charcoal bg-delta-nearBlack text-delta-softGray hover:border-delta-orange",
        variant === "shine" &&
          "group bg-delta-orange text-delta-black shadow-[0_0_45px_rgba(245,106,10,0.28)] hover:brightness-110",
        className
      )}
    >
      {variant === "shine" ? (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-1000 group-hover:translate-x-full" />
      ) : null}

      {variant === "shine" ? (
        <span className="pointer-events-none absolute inset-0 animate-pulse rounded-full ring-1 ring-white/20" />
      ) : null}

      <span className="relative z-10">{children}</span>
    </Link>
  );
}