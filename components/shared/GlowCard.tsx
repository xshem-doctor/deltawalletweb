import { cn } from "@/utils/cn";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-delta-nearBlack p-6 shadow-card",
        "transition duration-300 hover:border-delta-orange/40 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}