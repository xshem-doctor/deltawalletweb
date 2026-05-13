import { CheckCircle2, Clock3, type LucideIcon } from "lucide-react";
import Container from "@/components/shared/Container";
import DownloadButton from "@/components/shared/DownloadButton";
import InfoCard from "@/components/shared/InfoCard";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { useT } from "@/i18n/useT";
import type { TextBlock } from "@/i18n/translations";

export default function ProductPage() {
  const t = useT();
  const sections = t<TextBlock[]>("product.sections");
  const now = t<string[]>("product.availability.now");
  const later = t<string[]>("product.availability.later");

  return (
    <>
      <PageHero
        eyebrow={t("product.hero.eyebrow")}
        title={t("product.hero.title")}
        subtitle={t("product.hero.subtitle")}
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
      <section className="bg-delta-nearBlack py-16">
        <Container>
          <SectionHeading title={t("common.availableNow")} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ListPanel icon={CheckCircle2} items={now} />
            <ListPanel icon={Clock3} title={t("common.planned")} items={later} />
          </div>
        </Container>
      </section>
    </>
  );
}

function ListPanel({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title?: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-delta-black p-6">
      {title ? <h2 className="mb-5 text-xl font-semibold text-white">{title}</h2> : null}
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-delta-lightGray/75">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-delta-orange" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
