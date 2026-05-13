// components/home/DownloadCta.tsx

import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
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
      title: "Simple install",
      text: "Download the APK, allow installation if Android asks, then open the app.",
    },
    {
      icon: BadgeCheck,
      title: "Google Play later",
      text: t("coming"),
    },
  ];

  return (
    <div className="border-t border-white/10 py-16 md:py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-delta-nearBlackSoft px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-delta-orange/30 bg-delta-orange/10 px-4 py-2 text-sm font-medium text-delta-orange">
                <FileDown className="h-4 w-4" />
                Android download
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t("title")}
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-delta-lightGray/70">
                {t("subtitle")}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <DownloadExperience buttonLabel={t("button")} />

                <div className="flex items-center gap-2 text-sm text-delta-lightGray/50">
                  <ArrowDownToLine className="h-4 w-4 text-delta-orange" />
                  Direct APK install
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {points.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-delta-black/40 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-delta-orange text-delta-black">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-delta-orange/70">
                        Step {index + 1}
                      </div>

                      <h3 className="mt-1 text-base font-semibold text-white">
                        {point.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-delta-lightGray/60">
                        {point.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}