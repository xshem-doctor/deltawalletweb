import LegalPage from "@/components/shared/LegalPage";
import { useT } from "@/i18n/useT";
import type { TextBlock } from "@/i18n/translations";

export default function TermsPage() {
  const t = useT();

  return (
    <LegalPage
      title={t("legal.terms.title")}
      updated={t("legal.updated")}
      intro={t("legal.terms.intro")}
      sections={t<TextBlock[]>("legal.terms.sections")}
    />
  );
}
