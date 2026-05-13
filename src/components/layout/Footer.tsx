import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Container from "@/components/shared/Container";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n/useT";

export default function Footer() {
  const { locale, t } = useI18n();

  function renderLink(item: { labelKey: string; href: string }) {
    if (item.href === "download") {
      return (
        <a href={siteConfig.apkUrl} className="hover:text-white">
          {t(`footer.${item.labelKey}`)}
        </a>
      );
    }

    return (
      <Link to={`/${locale}${item.href}`} className="hover:text-white">
        {t(`footer.${item.labelKey}`)}
      </Link>
    );
  }

  return (
    <footer className="border-t border-white/10 bg-delta-black py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.iconPath}
                alt=""
                className="h-10 w-10 rounded-lg"
                width="40"
                height="40"
              />
              <span className="font-semibold text-white">Delta Wallet</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-delta-lightGray/60">
              {t("footer.description")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title={t("footer.product")}>
              {footerNavigation.product.map((item) => (
                <span key={item.labelKey}>{renderLink(item)}</span>
              ))}
            </FooterColumn>

            <FooterColumn title={t("footer.company")}>
              {footerNavigation.company.map((item) => (
                <span key={item.labelKey}>{renderLink(item)}</span>
              ))}
            </FooterColumn>

            <FooterColumn title={t("footer.legal")}>
              {footerNavigation.legal.map((item) => (
                <span key={item.labelKey}>{renderLink(item)}</span>
              ))}
            </FooterColumn>

            <FooterColumn title={t("footer.support")}>
              <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white">
                {t("footer.supportEmail")}
              </a>
              <a href={`mailto:${siteConfig.securityEmail}`} className="hover:text-white">
                {t("footer.securityEmail")}
              </a>
              <a href={`mailto:${siteConfig.businessEmail}`} className="hover:text-white">
                {t("footer.businessEmail")}
              </a>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="max-w-4xl text-sm leading-6 text-delta-lightGray/55">
            {t("footer.disclaimer")}
          </p>
          <p className="mt-4 text-sm text-delta-lightGray/45">
            © {new Date().getFullYear()} Delta Wallet. {t("footer.rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-delta-lightGray/60">
        {children}
      </div>
    </div>
  );
}
