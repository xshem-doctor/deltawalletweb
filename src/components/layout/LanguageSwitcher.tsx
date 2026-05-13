import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/i18n/useT";

export default function LanguageSwitcher() {
  const { locale } = useI18n();
  const location = useLocation();
  const nextLocale = locale === "ar" ? "en" : "ar";
  const nextPath = location.pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${nextLocale}`);

  return (
    <Link
      to={nextPath || `/${nextLocale}`}
      className="rounded-full border border-white/10 bg-delta-nearBlack px-4 py-2 text-sm font-medium text-delta-lightGray transition hover:border-delta-orange hover:text-white"
    >
      {locale === "ar" ? "EN" : "عربي"}
    </Link>
  );
}
