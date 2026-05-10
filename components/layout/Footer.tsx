import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/shared/Container";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-delta-black py-12">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-delta-orange font-black text-delta-black">
              Δ
            </div>
            <span className="font-semibold text-white">Delta Wallet</span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-delta-lightGray/60">
            {t("description")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{t("legal")}</h3>
          <div className="mt-4 grid gap-3 text-sm text-delta-lightGray/60">
            <Link href={`/${locale}/privacy`} className="hover:text-white">
              {t("privacy")}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-white">
              {t("terms")}
            </Link>
          </div>
        </div>

        <div className="text-sm text-delta-lightGray/50 md:text-end">
          © {new Date().getFullYear()} Delta Wallet. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}