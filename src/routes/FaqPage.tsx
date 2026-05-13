import FaqAccordion from "@/components/faq/FaqAccordion";
import Container from "@/components/shared/Container";
import PageHero from "@/components/shared/PageHero";
import { useT } from "@/i18n/useT";
import type { FaqItem } from "@/i18n/translations";

export default function FaqPage() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t("faq.hero.eyebrow")}
        title={t("faq.hero.title")}
        subtitle={t("faq.hero.subtitle")}
      />
      <section className="bg-delta-black py-10 pb-16 sm:pb-24">
        <Container>
          <FaqAccordion
            items={t<FaqItem[]>("faq.items")}
            categories={t<Record<string, string>>("faq.categories")}
            allLabel={t("faq.categories.all")}
            searchPlaceholder={t("faq.searchPlaceholder")}
            noResults={t("faq.noResults")}
          />
        </Container>
      </section>
    </>
  );
}
