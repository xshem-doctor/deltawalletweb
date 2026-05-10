"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
import {
  BadgeCheck,
  CreditCard,
  Download,
  Gift,
  Wallet,
} from "lucide-react";

type Chip = { label: string; accent?: boolean };

type Step = {
  number: string;
  titleKey: string;
  descKey: string;
  icon: React.ElementType;
  chips: Chip[];
  badgeKey: string;
  isFinal?: boolean;
  delay: number;
};

const steps: Step[] = [
  {
    number: "01",
    titleKey: "step1_title",
    descKey: "step1_desc",
    icon: BadgeCheck,
    chips: [
      { label: "No KYC required" },
      { label: "Instant activation" },
      { label: "Secure by design" },
    ],
    badgeKey: "badge1",
    delay: 0,
  },
  {
    number: "02",
    titleKey: "step2_title",
    descKey: "step2_desc",
    icon: Wallet,
    chips: [
      { label: "USDT (TRC-20 / ERC-20)", accent: true },
      { label: "No conversion fees" },
      { label: "Real-time balance" },
    ],
    badgeKey: "badge2",
    delay: 100,
  },
  {
    number: "03",
    titleKey: "step3_title",
    descKey: "step3_desc",
    icon: Gift,
    chips: [
      { label: "Gift cards" },
      { label: "Game credits" },
      { label: "Streaming" },
      { label: "Software licenses" },
    ],
    badgeKey: "badge3",
    delay: 200,
  },
  {
    number: "04",
    titleKey: "step4_title",
    descKey: "step4_desc",
    icon: CreditCard,
    chips: [
      { label: "One-tap checkout", accent: true },
      { label: "Atomic transaction" },
      { label: "Zero chargebacks" },
    ],
    badgeKey: "badge4",
    delay: 300,
  },
  {
    number: "05",
    titleKey: "step5_title",
    descKey: "step5_desc",
    icon: Download,
    chips: [
      { label: "Instant delivery", accent: true },
      { label: "Stored in account" },
      { label: "Email backup" },
    ],
    badgeKey: "badge5",
    isFinal: true,
    delay: 400,
  },
];

function StepCard({ step }: { step: Step }) {
  const t = useTranslations("how");
  const ref = useRef<HTMLDivElement>(null);
  const Icon = step.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(
            () => el.classList.add("opacity-100", "translate-y-0"),
            step.delay
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [step.delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-[20px] border",
        "grid grid-cols-[56px_1fr_auto] items-start gap-x-10 p-10",
        "opacity-0 translate-y-7 transition-all duration-700 ease-out",
        step.isFinal
          ? "border-delta-orange/30 bg-[#130f0a]"
          : "border-white/[0.07] bg-[#0e0e10] hover:border-delta-orange/25"
      )}
    >
      {/* Glow overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[20px] bg-delta-orange/[0.07]",
          "opacity-0 transition-opacity duration-400 group-hover:opacity-100",
          step.isFinal && "!opacity-40"
        )}
      />

      {/* Number + icon column */}
      <div className="relative z-10 flex flex-col items-center gap-3.5 pt-1">
        <span className="text-[10px] font-bold tracking-[0.12em] text-delta-orange">
          {step.number}
        </span>
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-[14px] border",
            "border-delta-orange/25 bg-delta-orange/10 text-delta-orange",
            "transition-all duration-300 group-hover:scale-105 group-hover:bg-delta-orange/20",
            step.isFinal && "bg-delta-orange/20 border-delta-orange/40"
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {/* Body */}
      <div className="relative z-10 min-w-0">
        <h3 className="mb-2.5 text-[22px] font-bold leading-tight tracking-[-0.03em] text-white">
          {t(step.titleKey)}
        </h3>
        <p className="max-w-[560px] text-[14px] font-light leading-[1.8] text-white/50">
          {t(step.descKey)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {step.chips.map((chip) => (
            <span
              key={chip.label}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
                "text-[11px] font-medium tracking-wide",
                chip.accent
                  ? "border-delta-orange/25 bg-delta-orange/[0.08] text-delta-orange"
                  : "border-white/[0.08] bg-white/[0.04] text-white/40"
              )}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      {/* Status badge */}
      <div
        className={cn(
          "relative z-10 self-center whitespace-nowrap rounded-full border",
          "px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em]",
          "transition-all duration-300",
          step.isFinal
            ? "border-green-500/30 bg-green-500/10 text-green-400"
            : cn(
                "border-white/10 bg-white/[0.04] text-white/25",
                "group-hover:border-delta-orange/30 group-hover:bg-delta-orange/10 group-hover:text-delta-orange"
              )
        )}
      >
        {t(step.badgeKey)}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const t = useTranslations("how");

  return (
    <section id="how-it-works" className="bg-[#08080a] py-28">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-delta-orange">
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-delta-orange" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
            {t("headline_1")}
            <br />
            <span className="text-delta-orange">{t("headline_2")}</span>
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] font-light leading-[1.75] text-white/50">
            {t("subtitle")}
          </p>
        </div>

        {/* Step cards with connector lines */}
        <div className="flex flex-col gap-0.5">
          {steps.map((step, i) => (
            <div key={step.number}>
              <StepCard step={step} />
              {i < steps.length - 1 && (
                <div className="flex justify-start ps-[84px]">
                  <div className="h-5 w-px bg-gradient-to-b from-delta-orange/20 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}