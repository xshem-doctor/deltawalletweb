"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import DeltaButton from "@/components/shared/DeltaButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { navigationItems } from "@/config/navigation";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-delta-black/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-delta-orange text-lg font-black text-delta-black">
            Δ
          </div>
          <span className="text-base font-semibold text-white">Delta Wallet</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href.startsWith("/") ? `/${locale}${item.href}` : item.href}
              className="text-sm text-delta-lightGray/70 transition hover:text-white"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <DeltaButton href="#download" className="hidden sm:inline-flex">
            {t("download")}
          </DeltaButton>
        </div>
      </Container>
    </header>
  );
}