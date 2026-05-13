import type { ReactNode } from "react";
import Container from "./Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
}: PageHeroProps) {
  return (
    <section className="bg-delta-black py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-delta-orange">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-delta-lightGray/70">
            {subtitle}
          </p>
          {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
