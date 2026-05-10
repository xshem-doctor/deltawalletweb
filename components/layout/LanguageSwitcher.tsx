
"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <Link
      href={`/${nextLocale}`}
      className="rounded-full border border-white/10 bg-delta-nearBlack px-4 py-2 text-sm font-medium text-delta-lightGray transition hover:border-delta-orange hover:text-white"
    >
      {locale === "ar" ? "EN" : "عربي"}
    </Link>
  );
}