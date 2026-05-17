import { Link } from "react-router-dom";
import Container from "@/components/shared/Container";
import DownloadButton from "@/components/shared/DownloadButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { headerNavigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n/useT";

export default function Header() {
  const { locale, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-delta-black/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link to={`/${locale}`} className="flex shrink-0 items-center gap-3">
          <img
            src={siteConfig.iconPath}
            alt=""
            className="h-10 w-10 rounded-lg"
            width="40"
            height="40"
          />
          <span className="text-base font-semibold text-white">Delta Wallet</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {headerNavigationItems.map((item) => (
            <Link
              key={item.labelKey}
              to={`/${locale}${item.href}`}
            className="text-sm font-medium text-delta-lightGray/70 transition hover:text-white"
            >
              {t(`nav.${item.labelKey}`)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <DownloadButton className="hidden sm:inline-flex" />
        </div>
      </Container>
      <Container className="pb-3 lg:hidden">
        <nav className="flex gap-4 overflow-x-auto text-sm text-delta-lightGray/70">
          {headerNavigationItems.map((item) => (
            <Link
              key={item.labelKey}
              to={`/${locale}${item.href}`}
              className="shrink-0 py-1 hover:text-white"
            >
              {t(`nav.${item.labelKey}`)}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
