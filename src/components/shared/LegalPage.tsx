import Container from "./Container";
import type { TextBlock } from "@/i18n/translations";

type LegalPageProps = {
  title: string;
  updated: string;
  intro?: string;
  sections: TextBlock[];
};

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <section className="bg-delta-black py-16 text-white sm:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-delta-orange">Delta Wallet</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-delta-lightGray/70">{updated}</p>
          {intro ? (
            <p className="mt-8 text-base leading-7 text-delta-lightGray/75">
              {intro}
            </p>
          ) : null}

          <div className="mt-12 space-y-9 text-delta-lightGray/75">
            {sections.map((section) => (
              <LegalSection key={section.title} section={section} />
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}

export function LegalSection({ section }: { section: TextBlock }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white">{section.title}</h2>
      <p className="mt-3 leading-7">{section.body}</p>
    </section>
  );
}
