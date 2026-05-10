"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Download, Sparkles, X } from "lucide-react";
import DeltaButton from "@/components/shared/DeltaButton";
import { siteConfig } from "@/config/site";
import { useState } from "react";

type DownloadExperienceProps = {
  buttonLabel: string;
};

export default function DownloadExperience({ buttonLabel }: DownloadExperienceProps) {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleDownloadClick() {
    setClicked(true);
    setOpen(true);

    window.setTimeout(() => {
      setClicked(false);
    }, 900);
  }

  return (
    <>
      <div className="relative">
        <DeltaButton
          href={siteConfig.apkUrl}
          variant="shine"
          onClick={handleDownloadClick}
          className="h-14 w-full px-8 text-base md:w-auto"
        >
          <span className="inline-flex items-center gap-2">
            <Download className="h-5 w-5" />
            {buttonLabel}
          </span>
        </DeltaButton>

        <AnimatePresence>
          {clicked ? (
            <motion.div
              className="pointer-events-none absolute -inset-4 rounded-full border border-delta-orange/40"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.45, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              aria-label="Close download message"
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="
                fixed inset-x-0 bottom-0 z-[100]
                rounded-t-[2rem] border border-white/10 bg-delta-nearBlack p-6 shadow-card
                md:left-1/2 md:top-1/2 md:bottom-auto md:w-full md:max-w-md
                md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[2rem]
              "
              initial={{ y: 120, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 120, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute end-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-delta-lightGray/60 transition hover:border-delta-orange hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-delta-orange/10">
                <CheckCircle2 className="h-8 w-8 text-delta-orange" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  Thanks for downloading Delta Wallet
                </h3>

                <p className="mt-3 text-sm leading-6 text-delta-lightGray/60">
                  The APK download should start now. After installation, open the app and create your account.
                </p>
              </div>

              <div className="mt-6 rounded-3xl border border-delta-orange/20 bg-delta-orange/10 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-delta-orange" />
                  <p className="text-sm leading-6 text-delta-lightGray/70">
                    If Android asks for permission, allow installation from your browser, then continue installing Delta Wallet.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 h-12 w-full rounded-full bg-delta-orange text-sm font-semibold text-delta-black transition hover:brightness-110"
              >
                Got it
              </button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}