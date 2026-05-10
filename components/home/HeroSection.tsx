"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import DeltaButton from "@/components/shared/DeltaButton";
import Reveal from "@/components/motion/Reveal";
import TypingTitle from "@/components/motion/TypingTitle";
import { motion } from "framer-motion";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-delta-black bg-delta-radial py-24 sm:py-32">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-delta-grid bg-[size:44px_44px] opacity-20"
        animate={{
          backgroundPosition: ["0px 0px", "44px 44px"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-delta-orange/20 blur-[140px]"
        animate={{
          x: [-80, 80, -80],
          y: [0, 60, 0],
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -end-24 top-1/3 h-[520px] w-[520px] rounded-full bg-delta-orange/10 blur-[160px]"
        animate={{
          x: [60, -40, 60],
          y: [-30, 50, -30],
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -start-32 bottom-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[150px]"
        animate={{
          x: [-40, 70, -40],
          y: [40, -40, 40],
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-delta-black/20 to-delta-black" />

      <Container className="relative">
        <Reveal>
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full bg-delta-orange/10 px-4 py-2 text-sm font-medium text-delta-orange ring-1 ring-delta-orange/20">
              {t("eyebrow")}
            </div>

            <TypingTitle
              text={t("title")}
              className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-delta-lightGray/70">
              {t("subtitle")}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <DeltaButton href="#download">{t("primaryCta")}</DeltaButton>

              <DeltaButton href="#services" variant="secondary">
                {t("secondaryCta")}
              </DeltaButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}