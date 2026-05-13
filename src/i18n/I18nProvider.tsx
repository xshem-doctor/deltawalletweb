import { createContext, type ReactNode } from "react";
import { readPath, type Locale } from "./translations";

type I18nContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: <T = string>(key: string) => T;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const value: I18nContextValue = {
    locale,
    dir: locale === "ar" ? "rtl" : "ltr",
    t: (key) => readPath(locale, key),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
