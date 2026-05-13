import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { I18nProvider } from "@/i18n/I18nProvider";
import { isLocale, type Locale } from "@/i18n/translations";

export default function LocaleLayout() {
  const { locale } = useParams();

  if (!isLocale(locale)) {
    return <Navigate to="/en" replace />;
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
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
