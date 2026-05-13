import Container from "@/components/shared/Container";
import DownloadButton from "@/components/shared/DownloadButton";
import InfoCard from "@/components/shared/InfoCard";
import PageHero from "@/components/shared/PageHero";
import { useT } from "@/i18n/useT";
import type { TextBlock } from "@/i18n/translations";

export default function ServicesPage() {
  const t = useT();
  const sections = t<TextBlock[]>("services.sections");

  return (
    <>
      <PageHero
        eyebrow={t("services.hero.eyebrow")}
        title={t("services.hero.title")}
        subtitle={t("services.hero.subtitle")}
        actions={<DownloadButton />}
      />
      <section className="bg-delta-black py-10 pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <InfoCard
                key={section.title}
                title={section.title}
                body={section.body}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
