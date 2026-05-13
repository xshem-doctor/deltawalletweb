import Container from "@/components/shared/Container";
import InfoCard from "@/components/shared/InfoCard";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/useT";
import type { TextBlock } from "@/i18n/translations";

export default function SecurityPage() {
  const t = useT();
  const sections = t<TextBlock[]>("security.sections");
  const neverAsk = t<string[]>("security.neverAsk");
  const checklist = t<string[]>("security.checklist");

  return (
    <>
      <PageHero
        eyebrow={t("security.hero.eyebrow")}
        title={t("security.hero.title")}
        subtitle={t("security.hero.subtitle")}
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
      <section className="bg-delta-nearBlack py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Checklist title={t("security.neverAskTitle")} items={neverAsk} />
            <Checklist title={t("security.checklistTitle")} items={checklist} />
          </div>
          <div className="mt-8 rounded-lg border border-delta-orange/30 bg-delta-orange/10 p-5 text-sm leading-6 text-delta-lightGray">
            {t("security.report")}{" "}
            <a href={`mailto:${siteConfig.securityEmail}`} className="font-semibold text-delta-orange">
              {siteConfig.securityEmail}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-delta-black p-6">
      <SectionHeading title={title} align="left" />
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-delta-lightGray/70">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
