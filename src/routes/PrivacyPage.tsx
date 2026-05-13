import LegalPage from "@/components/shared/LegalPage";
import { useT } from "@/i18n/useT";
import type { TextBlock } from "@/i18n/translations";

export default function PrivacyPage() {
  const t = useT();

  return (
    <LegalPage
      title={t("legal.privacy.title")}
      updated={t("legal.updated")}
      intro={t("legal.privacy.intro")}
      sections={t<TextBlock[]>("legal.privacy.sections")}
    />
  );
}
