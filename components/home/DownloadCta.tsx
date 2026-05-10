import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import Reveal from "@/components/motion/Reveal";
import DownloadExperience from "@/components/download/DownloadExperience";
import {
  Smartphone,
  ShieldCheck,
  FileDown,
  BadgeCheck,
  ArrowDownToLine,
} from "lucide-react";

export default function DownloadCta() {
  const t = useTranslations("download");

  const points = [
    {
      icon: Smartphone,
      title: "Android APK",
      text: "Install Delta Wallet directly on your Android phone.",
    },
    {
      icon: ShieldCheck,
      title: "Clear install flow",
      text: "Download, allow install if prompted, then open the app.",
    },
    {
      icon: BadgeCheck,
      title: "Google Play later",
      text: t("coming"),
    },
  ];

  return (
    <section id="download" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-delta-orange/10 blur-[140px]" />
      <div className="pointer-events-none absolute end-0 top-20 h-72 w-72 rounded-full bg-delta-orange/10 blur-[120px]" />

      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-10 shadow-glow backdrop-blur-xl md:px-10 md:py-14 lg:px-14">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-delta-orange/50 to-transparent" />

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-delta-orange/10 px-4 py-2 text-sm font-medium text-delta-orange ring-1 ring-delta-orange/20">
                  <FileDown className="h-4 w-4" />
                  Android download
                </div>

                <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {t("title")}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-delta-lightGray/70">
                  {t("subtitle")}
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <DownloadExperience buttonLabel={t("button")} />

                  <div className="flex items-center gap-2 text-sm text-delta-lightGray/50">
                    <ArrowDownToLine className="h-4 w-4 text-delta-orange" />
                    Direct APK install
                  </div>
                </div>

                <p className="mt-5 max-w-xl text-xs leading-6 text-delta-lightGray/40">
                  <span className="text-delta-orange">
                    /public/apk/delta-wallet.apk
                  </span>
                </p>
              </div>

              <div className="relative">
                <div className="absolute start-6 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-delta-orange/0 via-delta-orange/40 to-delta-orange/0" />

                <div className="space-y-7">
                  {points.map((point, index) => {
                    const Icon = point.icon;

                    return (
                      <div
                        key={point.title}
                        className="group relative flex gap-5 rounded-[1.75rem] p-2 transition"
                      >
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-delta-orange text-delta-black shadow-[0_0_35px_rgba(255,122,0,0.25)] transition group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="pt-1">
                          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-delta-orange/70">
                            Step {index + 1}
                          </div>

                          <h3 className="mt-2 text-xl font-semibold text-white">
                            {point.title}
                          </h3>

                          <p className="mt-2 max-w-md text-sm leading-6 text-delta-lightGray/60">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}