import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { I18nProvider } from "@/i18n/I18nProvider";
import { isLocale, type Locale } from "@/i18n/translations";

/**
 * Chromeless layout for the in-app Earn WebView. Same locale + RTL handling
 * as the marketing ``LocaleLayout`` but without the site header/footer — those
 * belong on the public website, not inside the native app screen.
 */
export default function EarnLayout() {
  const { locale } = useParams();

  if (!isLocale(locale)) {
    return <Navigate to="/en/earn" replace />;
  }

  return <LocalizedShell locale={locale} />;
}

function LocalizedShell({ locale }: { locale: Locale }) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [dir, locale]);

  return (
    <I18nProvider locale={locale}>
      <div className="min-h-screen bg-delta-black text-delta-softGray">
        <Outlet />
      </div>
    </I18nProvider>
  );
}
